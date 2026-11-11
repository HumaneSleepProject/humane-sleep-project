'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import { FILINGS, GRANTS, type Grant, type GrantStatus } from '@/data/admin/grants';

const OPEN: GrantStatus[] = ['Prospect', 'Researching', 'Drafting', 'Submitted', 'Reporting'];
const GROUPS: { label: string; match: (g: Grant) => boolean }[] = [
  { label: 'Open', match: (g) => OPEN.includes(g.status) },
  { label: 'Won', match: (g) => g.status === 'Won' },
  { label: 'Closed', match: (g) => ['Lost', 'Missed', 'Stalled', 'Not a fit'].includes(g.status) },
  { label: 'All', match: () => true },
];

const glass = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '0.75rem',
};

const money = (n?: number) => (n ? `$${n.toLocaleString('en-US')}` : '');
const fmt = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
const daysUntil = (iso: string, today: Date) => {
  const [y, m, d] = iso.split('-').map(Number);
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((new Date(y, m - 1, d).getTime() - t.getTime()) / 86_400_000);
};

function DaysChip({ iso, today }: { iso: string; today: Date | null }) {
  if (!today) return null;
  const n = daysUntil(iso, today);
  const label = n < 0 ? `${-n}d ago` : n === 0 ? 'today' : `${n}d`;
  const color = n < 0 ? '#9aa0a6' : n <= 14 ? '#ff8a80' : n <= 45 ? '#ffd27a' : '#a5d6a7';
  return <Chip size="small" label={label} sx={{ color: '#111', backgroundColor: color, fontWeight: 700 }} />;
}

export default function GrantsBoard() {
  const [group, setGroup] = useState('Open');
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  const rows = useMemo(() => {
    const g = GROUPS.find((x) => x.label === group) ?? GROUPS[0];
    return GRANTS.filter(g.match).sort((a, b) => {
      if (a.deadline && b.deadline) return a.deadline.localeCompare(b.deadline);
      if (a.deadline) return -1;
      if (b.deadline) return 1;
      return a.funder.localeCompare(b.funder);
    });
  }, [group]);

  const filings = useMemo(() => [...FILINGS].sort((a, b) => a.due.localeCompare(b.due)), []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Link href="/admin" style={{ color: 'rgba(255,255,255,0.8)' }}>&larr; Admin</Link>
      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mt: 1, mb: 1 }}>
        Grants &amp; filings
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 4 }}>
        Edit <code>src/data/admin/grants.ts</code> to update. Dates marked &ldquo;est.&rdquo; are guesses from past
        cycles. Confirm on the funder&apos;s site.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
        Filings and compliance
      </Typography>
      <Box component="ul" sx={{ m: 0, mb: 6, p: 0, display: 'grid', gap: 1.5 }}>
        {filings.map((f) => (
          <Box component="li" key={f.filing} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700 }}>{f.filing}</Typography>
              <Chip size="small" label={f.status} variant="outlined" sx={{ color: f.status === 'Upcoming' ? '#fff' : '#ffd27a', borderColor: 'currentColor' }} />
              <DaysChip iso={f.due} today={today} />
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              {f.agency} &middot; due {fmt(f.due)}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>{f.note}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
        Grant pipeline
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }} role="group" aria-label="Filter grants">
        {GROUPS.map((g) => (
          <Chip
            key={g.label}
            label={`${g.label} (${GRANTS.filter(g.match).length})`}
            clickable
            variant="outlined"
            onClick={() => setGroup(g.label)}
            aria-pressed={group === g.label}
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', backgroundColor: group === g.label ? 'rgba(255,255,255,0.25)' : 'transparent' }}
          />
        ))}
      </Box>
      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1.5 }}>
        {rows.map((g) => (
          <Box component="li" key={g.funder + g.program} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700 }}>{g.funder}</Typography>
              <Chip size="small" label={g.status} sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              {g.deadline && <DaysChip iso={g.deadline} today={today} />}
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>{g.program}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              {g.deadline ? `Deadline ${fmt(g.deadline)}${g.estimate ? ' (est.)' : ''}` : 'No fixed deadline'}
              {g.maxAward ? ` · up to ${money(g.maxAward)}` : ''} · fit {g.fit}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              <strong>Next:</strong> {g.next}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
