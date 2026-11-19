'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import { IDEAS, type IdeaStatus } from '@/data/admin/ideas';
import type { Owner } from '@/data/admin/team';
import OwnerChips from '@/components/admin/OwnerChips';

const ORDER: IdeaStatus[] = ['Scheduled', 'Planning', 'Idea', 'Done'];
const glass = { backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '0.75rem' };

export default function IdeasBoard() {
  const [owner, setOwner] = useState<Owner | null>(null);
  const rows = IDEAS.filter((r) => !owner || r.owner === owner).sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Link href="/admin" style={{ color: 'rgba(255,255,255,0.8)' }}>&larr; Admin</Link>
      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mt: 1, mb: 1 }}>
        Drive ideas
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
        Edit <code>src/data/admin/ideas.ts</code> to add or update. Use the{' '}
        <Link href="/admin/supplies" style={{ color: '#fff' }}>order planner</Link> to cost the supplies. Never note where
        anyone sleeps.
      </Typography>
      <OwnerChips value={owner} onChange={setOwner} />
      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1.5 }}>
        {rows.map((r) => (
          <Box component="li" key={r.title} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700 }}>{r.title}</Typography>
              <Chip size="small" label={r.status} sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <Chip size="small" label={r.owner} sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.15)' }} />
              {r.when && <Chip size="small" label={r.when} variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} />}
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>{r.why}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              <strong>Needs:</strong> {r.needs}
            </Typography>
          </Box>
        ))}
      </Box>
      {!rows.length && <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Nothing assigned to {owner} yet.</Typography>}
    </Container>
  );
}
