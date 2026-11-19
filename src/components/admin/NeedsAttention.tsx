'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Chip, Typography } from '@mui/material';
import { FILINGS, GRANTS } from '@/data/admin/grants';
import type { Item } from '@/data/admin/collections';
import type { Owner } from '@/data/admin/team';
import OwnerChips from '@/components/admin/OwnerChips';

interface Row {
  label: string;
  due: string;
  href: string;
  owner: string;
}

const DONE = ['Won', 'Lost', 'Missed', 'Stalled', 'Not a fit'];

const daysUntil = (iso: string, today: Date) => {
  const [y, m, d] = iso.split('-').map(Number);
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((new Date(y, m - 1, d).getTime() - t.getTime()) / 86_400_000);
};

// Anything overdue, or due within 30 days, that is not already closed out: tasks, grants and filings.
export default function NeedsAttention() {
  const [today, setToday] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Item[]>([]);
  const [owner, setOwner] = useState<Owner | null>(null);
  useEffect(() => {
    setToday(new Date());
    fetch('/api/admin/data?c=tasks', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setTasks(d.items))
      .catch(() => {});
  }, []);
  if (!today) return null;

  const rows: Row[] = [
    ...tasks
      .filter((t) => t.due && t.status !== 'Done')
      .map((t) => ({ label: t.title, due: t.due, href: '/admin/tasks', owner: t.owner })),
    ...FILINGS.filter((f) => f.status !== 'Upcoming').map((f) => ({ label: f.filing, due: f.due, href: '/admin/grants', owner: f.owner })),
    ...GRANTS.filter((g) => g.deadline && !DONE.includes(g.status)).map((g) => ({
      label: `${g.funder}: ${g.program}`,
      due: g.deadline as string,
      href: '/admin/grants',
      owner: g.owner,
    })),
  ]
    .filter((i) => daysUntil(i.due, today) <= 30 && (!owner || i.owner === owner))
    .sort((a, b) => a.due.localeCompare(b.due))
    .slice(0, 8);

  return (
    <Box component="section" aria-labelledby="attention" sx={{ mt: 4 }}>
      <Typography id="attention" variant="h6" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
        Needs attention
      </Typography>
      <OwnerChips value={owner} onChange={setOwner} />
      {!rows.length && (
        <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
          Nothing due in the next 30 days{owner ? ` for ${owner}` : ''}.
        </Typography>
      )}
      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1 }}>
        {rows.map((i) => {
          const n = daysUntil(i.due, today);
          return (
            <Box
              component="li"
              key={i.href + i.label}
              sx={{ listStyle: 'none', p: 1.5, borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', gap: 1.5, alignItems: 'center', flexWrap: 'wrap' }}
            >
              <Chip
                size="small"
                label={n < 0 ? `${-n}d overdue` : n === 0 ? 'today' : `in ${n}d`}
                sx={{ color: '#111', fontWeight: 700, backgroundColor: n < 0 ? '#ff8a80' : n <= 14 ? '#ffd27a' : '#a5d6a7' }}
              />
              <Link href={i.href} style={{ color: '#fff' }}>{i.label}</Link>
              <Chip size="small" label={i.owner} sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.15)' }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
