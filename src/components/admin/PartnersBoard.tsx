'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import { PARTNER_ROWS, type PartnerStage } from '@/data/admin/partners';
import type { Owner } from '@/data/admin/team';
import OwnerChips from '@/components/admin/OwnerChips';

const STAGES: PartnerStage[] = ['In talks', 'Reached out', 'Idea', 'Active', 'Paused'];
const glass = { backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '0.75rem' };

export default function PartnersBoard() {
  const [owner, setOwner] = useState<Owner | null>(null);
  const rows = PARTNER_ROWS.filter((r) => !owner || r.owner === owner);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Link href="/admin" style={{ color: 'rgba(255,255,255,0.8)' }}>&larr; Admin</Link>
      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mt: 1, mb: 1 }}>
        Partnerships
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
        Edit <code>src/data/admin/partners.ts</code> to update. Organization names and next steps only. Never put a
        person&apos;s name, email or phone number in this file, because the repo is public.
      </Typography>
      <OwnerChips value={owner} onChange={setOwner} />
      {STAGES.map((stage) => {
        const inStage = rows.filter((r) => r.stage === stage);
        if (!inStage.length) return null;
        return (
          <Box key={stage} component="section" sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
              {stage} ({inStage.length})
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1.5 }}>
              {inStage.map((r) => (
                <Box component="li" key={r.org} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                    <Typography sx={{ color: '#fff', fontWeight: 700 }}>{r.org}</Typography>
                    <Chip size="small" label={r.kind} variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} />
                    <Chip size="small" label={r.owner} sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.15)' }} />
                  </Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
                    <strong>Next:</strong> {r.next}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}
      {!rows.length && <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Nothing assigned to {owner} yet.</Typography>}
    </Container>
  );
}
