import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';

const TOOLS = [
  { href: '/admin/grants', title: 'Grants & filings', body: 'Deadlines, status and next step for every funder, plus the tax and state filings HSP owes.' },
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
    </Container>
  );
}
