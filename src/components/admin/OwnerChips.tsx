'use client';

import { Chip, Box } from '@mui/material';
import { OWNERS, type Owner } from '@/data/admin/team';

// "All / CEO / COO / ..." filter. value null means everyone.
export default function OwnerChips({ value, onChange }: { value: Owner | null; onChange: (o: Owner | null) => void }) {
  const base = { color: '#fff', borderColor: 'rgba(255,255,255,0.4)' };
  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }} role="group" aria-label="Filter by owner">
      <Chip
        label="Everyone"
        clickable
        variant="outlined"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        sx={{ ...base, backgroundColor: value === null ? 'rgba(255,255,255,0.25)' : 'transparent' }}
      />
      {OWNERS.map((o) => (
        <Chip
          key={o}
          label={o}
          clickable
          variant="outlined"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          sx={{ ...base, backgroundColor: value === o ? 'rgba(255,255,255,0.25)' : 'transparent' }}
        />
      ))}
    </Box>
  );
}
