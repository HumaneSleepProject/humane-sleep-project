import { NextResponse } from 'next/server';
import { COLLECTIONS, isCollectionKey, type Item } from '@/data/admin/collections';
import { readCollection, storeConfigured, writeCollection } from '@/lib/adminStore';

export const dynamic = 'force-dynamic';

const ID = /^[A-Za-z0-9_-]{1,40}$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Keep only known fields, check types and lengths. The repo is public and this is a shared login,
// so nothing arrives here unchecked.
function clean(key: keyof typeof COLLECTIONS, raw: unknown): Item[] | string {
  if (!Array.isArray(raw) || raw.length > 300) return 'Too many items.';
  const fields = COLLECTIONS[key].fields;
  const out: Item[] = [];
  for (const r of raw) {
    if (!r || typeof r !== 'object') return 'Bad item.';
    const rec = r as Record<string, unknown>;
    if (typeof rec.id !== 'string' || !ID.test(rec.id)) return 'Bad id.';
    const item: Item = { id: rec.id };
    for (const f of fields) {
      const v = typeof rec[f.key] === 'string' ? (rec[f.key] as string).trim() : '';
      if (v.length > (f.type === 'textarea' ? 1000 : 300)) return `${f.label} is too long.`;
      if (f.required && !v) return `${f.label} is required.`;
      if (f.type === 'select' && v && !f.options?.includes(v)) return `Bad ${f.label}.`;
      if (f.type === 'date' && v && !DATE.test(v)) return `Bad ${f.label}.`;
      item[f.key] = v;
    }
    for (const m of ['by', 'at'] as const) {
      const v = typeof rec[m] === 'string' ? (rec[m] as string).slice(0, 60) : '';
      if (v) item[m] = v;
    }
    out.push(item);
  }
  return out;
}

export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get('c') || '';
  if (!isCollectionKey(key)) return NextResponse.json({ error: 'Unknown list.' }, { status: 400 });
  try {
    const { items, sha, saved } = await readCollection(key);
    return NextResponse.json({ items, sha, saved, canSave: storeConfigured() });
  } catch (e) {
    console.error('admin data read', e);
    return NextResponse.json({ error: 'Could not load this list.' }, { status: 502 });
  }
}

export async function PUT(req: Request) {
  if (!storeConfigured()) {
    return NextResponse.json({ error: 'Saving is not set up on this site yet.' }, { status: 501 });
  }
  let body: { c?: string; items?: unknown; sha?: string | null; editor?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
  }
  const key = body.c || '';
  if (!isCollectionKey(key)) return NextResponse.json({ error: 'Unknown list.' }, { status: 400 });
  const items = clean(key, body.items);
  if (typeof items === 'string') return NextResponse.json({ error: items }, { status: 400 });
  const editor = typeof body.editor === 'string' ? body.editor.replace(/[^\w .'-]/g, '').slice(0, 40) : '';
  try {
    const sha = await writeCollection(key, items, body.sha ?? null, editor);
    return NextResponse.json({ ok: true, sha });
  } catch (e) {
    const status = (e as { status?: number }).status;
    if (status === 409 || status === 422) {
      return NextResponse.json({ error: 'Someone else saved first. Reload to see their changes.', conflict: true }, { status: 409 });
    }
    console.error('admin data write', e);
    return NextResponse.json({ error: 'Could not save. Try again.' }, { status: 502 });
  }
}
