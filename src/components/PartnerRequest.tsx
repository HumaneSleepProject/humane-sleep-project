'use client';

import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
import { CONTACT_CONFIG } from '@/utils/constants';

const ITEMS = ['Sleeping bags', 'Blankets', 'Hygiene kits', 'Warm clothing / socks', 'Tents or tarps'];
const CITIES = ['Livermore', 'Pleasanton', 'Dublin', 'Other'];

const fieldSx = {
  '& .MuiInputBase-root': { color: '#fff', backgroundColor: 'rgba(0,0,0,0.25)' },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.8)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.35)' },
  '& .MuiSvgIcon-root': { color: '#fff' },
};

export default function PartnerRequest() {
  const [items, setItems] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const toggle = (item: string) =>
    setItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    const data = new FormData(form);
    data.set('items', items.join(', '));
    data.set('_subject', `Supply request: ${data.get('organization')}`);
    data.set('form', 'partner-supply-request');
    try {
      const res = await fetch(CONTACT_CONFIG.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      form.reset();
      setItems([]);
    } catch {
      setStatus('error');
    }
  }

  return (
    <Box
      component="section"
      aria-labelledby="partner-request"
      sx={{
        mb: 12,
        maxWidth: '1000px',
        mx: 'auto',
        p: { xs: 3, md: 4 },
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '0.75rem',
      }}
    >
      <Typography id="partner-request" variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
        Shelters and outreach teams: request supplies
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
        Tell us what your guests need and we&apos;ll get back to you within a week. Please don&apos;t include names or where
        anyone is sleeping. A count is all we need.
      </Typography>

      {status === 'sent' ? (
        <Typography role="status" sx={{ color: '#fff', fontWeight: 600 }}>
          Thanks, we got it. We&apos;ll reach out by email.
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
          <TextField name="organization" label="Organization" required sx={fieldSx} />
          <TextField name="email" type="email" label="Contact email" required sx={fieldSx} />
          <TextField name="city" select label="City" defaultValue="Livermore" sx={fieldSx}>
            {CITIES.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
          <TextField name="people" type="number" label="About how many people?" inputProps={{ min: 1 }} sx={fieldSx} />
          <TextField name="date" type="date" label="Needed by" InputLabelProps={{ shrink: true }} sx={fieldSx} />
          <Box sx={{ gridColumn: '1 / -1' }}>
            <Typography sx={{ color: '#fff', fontWeight: 600, mb: 0.5 }}>What do you need?</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 2 }}>
              {ITEMS.map((item) => (
                <FormControlLabel
                  key={item}
                  sx={{ color: 'rgba(255,255,255,0.9)' }}
                  control={
                    <Checkbox
                      checked={items.includes(item)}
                      onChange={() => toggle(item)}
                      sx={{ color: 'rgba(255,255,255,0.7)', '&.Mui-checked': { color: '#fff' } }}
                    />
                  }
                  label={item}
                />
              ))}
            </Box>
          </Box>
          <TextField name="message" label="Anything else (sizes, timing)" multiline minRows={3} sx={{ ...fieldSx, gridColumn: '1 / -1' }} />
          <Box sx={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button type="submit" variant="contained" disabled={status === 'sending'} sx={{ minHeight: 44, px: 4 }}>
              {status === 'sending' ? 'Sending…' : 'Send request'}
            </Button>
            {status === 'error' && (
              <Typography role="alert" sx={{ color: '#ffd27a' }}>
                That didn&apos;t go through. Please try again or use the contact page.
              </Typography>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
