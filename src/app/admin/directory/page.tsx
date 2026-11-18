import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import { RESOURCES } from '@/data/resources';

export const metadata = { title: 'Directory check | HSP Admin' };

const STALE_AFTER_DAYS = 180;

const glass = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '0.75rem',
};

const fmt = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
const phone = (d: string) => (d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d);

// Rendered per request so the "days old" numbers are never frozen at build time.
export const dynamic = 'force-dynamic';

export default function DirectoryCheck() {
  const now = Date.now();
  const rows = [...RESOURCES]
    .map((r) => ({ r, age: Math.floor((now - Date.parse(r.lastVerified)) / 86_400_000) }))
    .sort((a, b) => b.age - a.age);
  const stale = rows.filter((x) => x.age > STALE_AFTER_DAYS).length;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Link href="/admin" style={{ color: 'rgba(255,255,255,0.8)' }}>&larr; Admin</Link>
      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mt: 1, mb: 1 }}>
        Directory check
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, maxWidth: 720 }}>
        The public &ldquo;find help&rdquo; list is the part of this site that can actually move someone toward housing, so
        wrong phone numbers do real harm. Call the oldest ones first.
      </Typography>
      <Typography sx={{ color: '#ffd27a', fontWeight: 700, mb: 3 }}>
        {stale} of {rows.length} listings are older than {STALE_AFTER_DAYS} days.
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, fontSize: '0.9rem' }}>
        After you confirm one, set its <code>lastVerified</code> date in <code>src/data/resources.ts</code>. The public
        page tells visitors to call ahead for anything older than {STALE_AFTER_DAYS} days.
      </Typography>

      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1.5 }}>
        {rows.map(({ r, age }) => (
          <Box component="li" key={r.id} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700 }}>{r.name}</Typography>
              <Chip size="small" label={r.category} variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} />
              <Chip
                size="small"
                label={`${age} days old`}
                sx={{ color: '#111', fontWeight: 700, backgroundColor: age > STALE_AFTER_DAYS ? '#ff8a80' : '#a5d6a7' }}
              />
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              {r.city}
              {r.address ? ` · ${r.address}` : ''} · verified {fmt(r.lastVerified)}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              {r.phone && <a href={`tel:${r.phone}`} style={{ color: '#fff' }}>{phone(r.phone)}</a>}
              {r.phone && r.website ? ' · ' : ''}
              {r.website && (
                <a href={r.website} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                  {r.website.replace(/^https?:\/\//, '')}
                </a>
              )}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
