'use client';

import { useMemo, useState } from 'react';
import { Box, Chip, Link, MenuItem, TextField, Typography } from '@mui/material';
import {
  HELP_NOW,
  RESOURCES,
  RESOURCE_SOURCE,
  type City,
  type Resource,
  type ResourceCategory,
} from '@/data/resources';

const CATEGORIES: ResourceCategory[] = Array.from(new Set(RESOURCES.map((r) => r.category)));
const CITIES: (City | 'All cities')[] = ['All cities', 'Livermore', 'Pleasanton', 'Dublin', 'Countywide'];
const STALE_AFTER_DAYS = 180;

const formatPhone = (digits: string) =>
  digits.length === 10 ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}` : digits;

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
};

const isStale = (iso: string) => (Date.now() - Date.parse(iso)) / 86_400_000 > STALE_AFTER_DAYS;

const directionsUrl = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const glass = {
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '0.75rem',
};

const actionLink = {
  color: '#fff',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  minHeight: 44,
  display: 'inline-flex',
  alignItems: 'center',
};

function ResourceCard({ r }: { r: Resource }) {
  return (
    <Box component="li" sx={{ ...glass, p: 3, listStyle: 'none' }}>
      <Typography component="h4" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
        {r.name}
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', mb: 1 }}>
        {r.category} · {r.city}
      </Typography>
      {r.address && <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>{r.address}</Typography>}
      {r.hours && <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>{r.hours}</Typography>}
      {r.notes && (
        <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', mt: 1 }}>{r.notes}</Typography>
      )}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 3, mt: 1.5 }}>
        {r.phone && (
          <Link href={`tel:${r.phone}`} sx={actionLink} aria-label={`Call ${r.name}`}>
            Call {formatPhone(r.phone)}
          </Link>
        )}
        {r.address && (
          <Link href={directionsUrl(r.address)} target="_blank" rel="noopener noreferrer" sx={actionLink}>
            Directions
          </Link>
        )}
        {r.website && (
          <Link href={r.website} target="_blank" rel="noopener noreferrer" sx={actionLink}>
            Website
          </Link>
        )}
      </Box>
      <Typography
        sx={{
          color: isStale(r.lastVerified) ? '#ffd27a' : 'rgba(255,255,255,0.6)',
          fontSize: '0.8rem',
          mt: 1,
        }}
      >
        Info from {formatDate(r.lastVerified)}
        {isStale(r.lastVerified) ? '. Please call to confirm before you go.' : '.'}
      </Typography>
    </Box>
  );
}

export default function ResourceDirectory() {
  const [category, setCategory] = useState<ResourceCategory | 'All'>('All');
  const [city, setCity] = useState<City | 'All cities'>('All cities');
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter(
      (r) =>
        (category === 'All' || r.category === category) &&
        (city === 'All cities' || r.city === city || r.city === 'Countywide') &&
        (!q || [r.name, r.notes, r.address, r.category].join(' ').toLowerCase().includes(q)),
    );
  }, [category, city, query]);

  return (
    <Box component="section" aria-labelledby="find-help" sx={{ mb: 12, maxWidth: '1000px', mx: 'auto' }}>
      <Typography id="find-help" variant="h4" sx={{ color: "#fff", fontWeight: 700, mb: 2, scrollMarginTop: "88px" }}>
        Find help near you
      </Typography>

      <Box sx={{ ...glass, p: 3, mb: 4, borderColor: 'rgba(255, 210, 122, 0.5)' }}>
        <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Need help right now?</Typography>
        <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
          {HELP_NOW.map((h) => (
            <Box component="li" key={h.phone} sx={{ listStyle: 'none', color: 'rgba(255,255,255,0.85)' }}>
              <Link href={`tel:${h.phone}`} sx={{ ...actionLink, mr: 1 }}>
                {h.display}
              </Link>
              {h.label}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }} role="group" aria-label="Filter by type of help">
        {(['All', ...CATEGORIES] as const).map((c) => (
          <Chip
            key={c}
            label={c}
            clickable
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            sx={{
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.4)',
              backgroundColor: category === c ? 'rgba(255,255,255,0.25)' : 'transparent',
              minHeight: 36,
            }}
            variant="outlined"
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <TextField
          select
          size="small"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value as City | 'All cities')}
          sx={fieldSx}
        >
          {CITIES.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          label="Search (e.g. shower, meals, clinic)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ ...fieldSx, flex: 1, minWidth: 220 }}
        />
      </Box>

      <Typography aria-live="polite" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, fontSize: '0.9rem' }}>
        {results.length} {results.length === 1 ? 'place' : 'places'}
        {city !== 'All cities' ? ` in ${city} (plus countywide lines)` : ''}
      </Typography>

      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        {results.map((r) => (
          <ResourceCard key={r.id} r={r} />
        ))}
      </Box>
      {results.length === 0 && (
        <Typography sx={{ color: '#fff', mt: 2 }}>
          Nothing matches yet. Try another word, or dial <Link href="tel:211" sx={actionLink}>2-1-1</Link> for help anytime.
        </Typography>
      )}

      <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', mt: 3 }}>
        Source: {RESOURCE_SOURCE.name} from the Human Services Commissions of Dublin, Livermore and Pleasanton, revised{' '}
        {formatDate(RESOURCE_SOURCE.revised)}. Hours and services change, so call first. Know a listing that&apos;s wrong?
        Tell us on the <Link href="/contact" sx={{ color: '#fff' }}>contact page</Link>.
      </Typography>
    </Box>
  );
}

const fieldSx = {
  minWidth: 180,
  '& .MuiInputBase-root': { color: '#fff', backgroundColor: 'rgba(0,0,0,0.25)' },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.8)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.35)' },
  '& .MuiSvgIcon-root': { color: '#fff' },
};
