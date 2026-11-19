'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Chip, Container, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField, Typography } from '@mui/material';
import { COLLECTIONS, type Collection, type Item } from '@/data/admin/collections';
import type { Owner } from '@/data/admin/team';
import OwnerChips from '@/components/admin/OwnerChips';

const glass = { backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '0.75rem' };
const fieldSx = {
  '& .MuiInputBase-root': { color: '#fff' },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.8)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.35)' },
  '& .MuiSvgIcon-root': { color: '#fff' },
};
const NAME_KEY = 'hsp-admin-name';

const daysUntil = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const t = new Date();
  const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.round((new Date(y, m - 1, d).getTime() - today.getTime()) / 86_400_000);
};
const fmt = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};
const newId = () => 'i' + Math.random().toString(36).slice(2, 10);

// A list you can add to, edit, and delete from, saved to the repo so everyone sees the same thing.
export default function DataBoard({ collection }: { collection: Collection['key'] }) {
  const col = COLLECTIONS[collection];
  const [items, setItems] = useState<Item[] | null>(null);
  const [sha, setSha] = useState<string | null>(null);
  const [canSave, setCanSave] = useState(true);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [owner, setOwner] = useState<Owner | null>(null);
  const [showDone, setShowDone] = useState(false);
  const [editor, setEditor] = useState('');
  const [editing, setEditing] = useState<Item | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    try {
      setEditor(localStorage.getItem(NAME_KEY) || '');
    } catch {}
  }, []);

  const load = useCallback(async () => {
    setMsg('');
    try {
      const res = await fetch(`/api/admin/data?c=${collection}`, { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not load.');
      setItems(data.items);
      setSha(data.sha);
      setCanSave(data.canSave);
    } catch (e) {
      setMsg((e as Error).message);
    }
  }, [collection]);
  useEffect(() => {
    load();
  }, [load]);

  const persist = async (next: Item[]) => {
    setBusy(true);
    setMsg('Saving…');
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ c: collection, items: next, sha, editor }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.conflict) await load();
        throw new Error(data.error || 'Could not save.');
      }
      setItems(next);
      setSha(data.sha);
      setMsg('Saved.');
      return true;
    } catch (e) {
      setMsg((e as Error).message);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const stamp = (it: Item): Item => ({ ...it, by: editor.trim() || 'Someone', at: new Date().toISOString().slice(0, 10) });

  const saveForm = async () => {
    if (!editing || !items) return;
    const missing = col.fields.find((f) => f.required && !(editing[f.key] || '').trim());
    if (missing) return setFormError(`${missing.label} is required.`);
    setFormError('');
    try {
      if (editor.trim()) localStorage.setItem(NAME_KEY, editor.trim());
    } catch {}
    const it = stamp(editing);
    const next = isNew ? [...items, it] : items.map((x) => (x.id === it.id ? it : x));
    if (await persist(next)) setEditing(null);
  };

  const remove = async () => {
    if (!editing || !items) return;
    if (!confirmDelete) return setConfirmDelete(true);
    if (await persist(items.filter((x) => x.id !== editing.id))) {
      setEditing(null);
      setConfirmDelete(false);
    }
  };

  const quickStatus = (it: Item, value: string) => {
    if (!items) return;
    persist(items.map((x) => (x.id === it.id ? stamp({ ...x, [col.statusKey]: value }) : x)));
  };

  const open = (it: Item | null) => {
    setConfirmDelete(false);
    setFormError('');
    setIsNew(!it);
    const blank = Object.fromEntries(col.fields.map((f) => [f.key, f.type === 'select' ? f.options![0] : '']));
    setEditing(it ?? ({ id: newId(), ...blank } as Item));
  };

  const rows = useMemo(() => {
    if (!items) return [];
    return items
      .filter((x) => (!owner || x.owner === owner) && (showDone || !col.doneValues.includes(x[col.statusKey])))
      .sort((a, b) => {
        const s = col.statusOrder.indexOf(a[col.statusKey]) - col.statusOrder.indexOf(b[col.statusKey]);
        if (s) return s;
        if (col.dueKey) {
          const da = a[col.dueKey] || '9999';
          const db = b[col.dueKey] || '9999';
          if (da !== db) return da.localeCompare(db);
        }
        return a[col.titleKey].localeCompare(b[col.titleKey]);
      });
  }, [items, owner, showDone, col]);

  const detailFields = col.fields.filter(
    (f) => (f.type === 'text' || f.type === 'textarea') && f.key !== col.titleKey && !col.chipKeys.includes(f.key),
  );
  const hasDone = col.doneValues.length > 0;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Link href="/admin" style={{ color: 'rgba(255,255,255,0.8)' }}>&larr; Admin</Link>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', mt: 1, mb: 1 }}>
        <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700 }}>{col.title}</Typography>
        <Button variant="contained" onClick={() => open(null)} disabled={!items} sx={{ minHeight: 44 }}>
          Add {col.noun}
        </Button>
      </Box>
      <Typography sx={{ color: 'rgba(255,255,255,0.75)', mb: 2 }}>
        {col.blurb} Click Edit on any card to change it. Keep it to organization names and plans. Never add a
        person&apos;s contact details or where anyone sleeps, because the code behind this site is public.
      </Typography>

      {!canSave && items && (
        <Typography role="alert" sx={{ color: '#ffd27a', mb: 2 }}>
          Saving is not set up on this copy of the site, so changes will not stick. Use humanesleepproject.com/admin.
        </Typography>
      )}

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', mb: 1.5 }}>
        <TextField
          size="small"
          label="Your name (for the history)"
          value={editor}
          onChange={(e) => setEditor(e.target.value)}
          sx={{ ...fieldSx, minWidth: 220 }}
        />
        {hasDone && (
          <Chip
            label={showDone ? 'Hide done' : 'Show done'}
            clickable
            variant="outlined"
            onClick={() => setShowDone(!showDone)}
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
          />
        )}
        <Typography role="status" aria-live="polite" sx={{ color: 'rgba(255,255,255,0.85)' }}>{msg}</Typography>
      </Box>
      <OwnerChips value={owner} onChange={setOwner} />

      {!items && !msg && <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Loading…</Typography>}
      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1.5 }}>
        {rows.map((it) => {
          const due = col.dueKey ? it[col.dueKey] : '';
          const n = due ? daysUntil(due) : null;
          const done = col.doneValues.includes(it[col.statusKey]);
          return (
            <Box component="li" key={it.id} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5, opacity: done ? 0.6 : 1 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                <Typography sx={{ color: '#fff', fontWeight: 700, textDecoration: done ? 'line-through' : 'none' }}>{it[col.titleKey]}</Typography>
                {col.chipKeys.filter((k) => it[k]).map((k) => (
                  <Chip key={k} size="small" label={it[k]} sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.15)' }} />
                ))}
                {due && n !== null && !done && (
                  <Chip
                    size="small"
                    label={n < 0 ? `${-n}d overdue` : n === 0 ? 'due today' : `due ${fmt(due)}`}
                    sx={{ color: '#111', fontWeight: 700, backgroundColor: n < 0 ? '#ff8a80' : n <= 14 ? '#ffd27a' : '#a5d6a7' }}
                  />
                )}
              </Box>
              {detailFields.filter((f) => it[f.key]).map((f) => (
                <Typography key={f.key} sx={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.95rem' }}>
                  <strong>{f.label}:</strong> {it[f.key]}
                </Typography>
              ))}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexWrap: 'wrap', mt: 0.5 }}>
                <TextField
                  select
                  size="small"
                  label={col.fields.find((f) => f.key === col.statusKey)?.label}
                  value={it[col.statusKey]}
                  onChange={(e) => quickStatus(it, e.target.value)}
                  disabled={busy || !canSave}
                  sx={{ ...fieldSx, minWidth: 140 }}
                >
                  {col.statusOrder.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                </TextField>
                <Button onClick={() => open(it)} sx={{ color: '#fff', minHeight: 40 }}>Edit</Button>
                {it.by && <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>Updated {it.at} by {it.by}</Typography>}
              </Box>
            </Box>
          );
        })}
      </Box>
      {items && !rows.length && <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Nothing here{owner ? ` for ${owner}` : ''}.</Typography>}

      <Dialog
        open={!!editing}
        onClose={() => setEditing(null)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { backgroundColor: '#14143a', color: '#fff', backgroundImage: 'none' } }}
      >
        <DialogTitle>{isNew ? `Add ${col.noun}` : `Edit ${col.noun}`}</DialogTitle>
        <DialogContent sx={{ display: 'grid', gap: 2, pt: '8px !important' }}>
          {editing && col.fields.map((f) => (
            <TextField
              key={f.key}
              label={f.label}
              required={f.required}
              select={f.type === 'select'}
              type={f.type === 'date' ? 'date' : 'text'}
              multiline={f.type === 'textarea'}
              minRows={f.type === 'textarea' ? 2 : undefined}
              value={editing[f.key] || ''}
              onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
              InputLabelProps={f.type === 'date' ? { shrink: true } : undefined}
              sx={fieldSx}
            >
              {f.type === 'select' && f.options?.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </TextField>
          ))}
          {formError && <Typography role="alert" sx={{ color: '#ffd27a' }}>{formError}</Typography>}
          {msg && msg !== 'Saving…' && msg !== 'Saved.' && <Typography role="alert" sx={{ color: '#ffd27a' }}>{msg}</Typography>}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'space-between' }}>
          <Box>
            {!isNew && (
              <Button onClick={remove} disabled={busy} sx={{ color: confirmDelete ? '#ff8a80' : 'rgba(255,255,255,0.7)' }}>
                {confirmDelete ? 'Really delete?' : 'Delete'}
              </Button>
            )}
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button onClick={() => setEditing(null)} sx={{ color: '#fff' }}>Cancel</Button>
            <Button variant="contained" onClick={saveForm} disabled={busy || !canSave} sx={{ minHeight: 40 }}>
              {busy ? 'Saving…' : 'Save'}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
