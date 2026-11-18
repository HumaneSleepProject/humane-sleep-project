'use client';

import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { ORDER_DEFAULTS } from '@/data/admin/supplies';

const fieldSx = {
  '& .MuiInputBase-root': { color: '#fff', backgroundColor: 'rgba(0,0,0,0.25)' },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.8)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.35)' },
};

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

// Bags only come in whole cases, so the order rounds up. Shipping is not included.
export default function OrderPlanner() {
  const [people, setPeople] = useState(String(ORDER_DEFAULTS.people));
  const [already, setAlready] = useState('0');
  const [perBag, setPerBag] = useState(String(ORDER_DEFAULTS.perBag));
  const [caseSize, setCaseSize] = useState(String(ORDER_DEFAULTS.caseSize));

  const need = Math.max(0, Math.round(Number(people) || 0) - Math.round(Number(already) || 0));
  const size = Math.max(1, Math.round(Number(caseSize) || 1));
  const price = Math.max(0, Number(perBag) || 0);
  const cases = Math.ceil(need / size);
  const bags = cases * size;

  return (
    <Box>
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, mb: 3 }}>
        <TextField label="People to cover" type="number" value={people} onChange={(e) => setPeople(e.target.value)} inputProps={{ min: 0 }} sx={fieldSx} />
        <TextField label="Bags already on hand" type="number" value={already} onChange={(e) => setAlready(e.target.value)} inputProps={{ min: 0 }} sx={fieldSx} />
        <TextField label="Price per bag ($)" type="number" value={perBag} onChange={(e) => setPerBag(e.target.value)} inputProps={{ min: 0, step: 0.25 }} sx={fieldSx} />
        <TextField label="Bags per case" type="number" value={caseSize} onChange={(e) => setCaseSize(e.target.value)} inputProps={{ min: 1 }} sx={fieldSx} />
      </Box>
      <Box
        role="status"
        aria-live="polite"
        sx={{ p: 2, borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(0,0,0,0.3)' }}
      >
        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
          {cases} {cases === 1 ? 'case' : 'cases'} = {bags} bags = {usd(bags * price)}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
          Need {need}, rounded up to whole cases. Shipping not included. Ask for nonprofit pricing before you pay list.
        </Typography>
      </Box>
    </Box>
  );
}
