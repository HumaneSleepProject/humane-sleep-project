import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import NeedsAttention from '@/components/admin/NeedsAttention';
import { TEAM } from '@/data/admin/team';

const TOOLS = [
  { href: '/admin/grants', title: 'Grants & filings', body: 'Deadlines, status and next step for every funder, plus the tax and state filings HSP owes.' },
  { href: '/admin/supplies', title: 'Supplies & orders', body: 'What we can hand out, winter-ready sleeping bag prices, and an order planner.' },
  { href: '/admin/directory', title: 'Directory check', body: 'Which "find help" listings are out of date and need a phone call.' },
  { href: '/admin/partners', title: 'Partnerships', body: 'Every partner, funder and prospect, who owns the relationship, and the next step.' },
  { href: '/admin/ideas', title: 'Drive ideas', body: 'New drives and events: who is planning them and what they need.' },
  { href: '/admin/events', title: 'Events', body: 'Add, edit or remove events shown on the public Events page.' },
];

export default function AdminHome() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff', fontWeight: 700 }}>
        HSP Admin
      </Typography>
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, mt: 3 }}>
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            style={{
              display: 'block',
              padding: '24px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.3)',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{t.title}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>{t.body}</Typography>
          </Link>
        ))}
      </Box>
      <NeedsAttention />

      <Typography variant="h6" component="h2" sx={{ color: '#fff', fontWeight: 700, mt: 5, mb: 1 }}>
        Who does what
      </Typography>
      <Box component="ul" sx={{ m: 0, p: 0, display: 'grid', gap: 1.5 }}>
        {TEAM.map((t) => (
          <Box
            component="li"
            key={t.owner}
            sx={{ listStyle: 'none', p: 2, borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(0,0,0,0.3)' }}
          >
            <Typography sx={{ color: '#fff', fontWeight: 700 }}>
              {t.owner} <span style={{ fontWeight: 400, opacity: 0.75 }}>&middot; {t.who}</span>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 1 }}>{t.lane}</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {t.tools.map((x) => (
                <Link key={x.href + x.label} href={x.href} style={{ color: '#fff' }}>{x.label}</Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
