import Link from 'next/link';
import { Box, Chip, Container, Typography } from '@mui/material';
import OrderPlanner from '@/components/admin/OrderPlanner';
import { BAG_OPTIONS, SUPPLY_ITEMS } from '@/data/admin/supplies';

export const metadata = { title: 'Supplies | HSP Admin' };

const glass = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '0.75rem',
};

const usd = (n: number) => `$${n.toFixed(2)}`;
const fmt = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function SuppliesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Link href="/admin" style={{ color: 'rgba(255,255,255,0.8)' }}>&larr; Admin</Link>
      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mt: 1, mb: 1 }}>
        Supplies &amp; orders
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: 720 }}>
        What we can honestly hand out, and what a winter-ready sleeping bag costs. We give people something to survive the
        night. We do not house anyone, so every handout should come with the 2-1-1 and directory info.
        Edit <code>src/data/admin/supplies.ts</code> to update.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>What we supply</Typography>
      <Box component="ul" sx={{ m: 0, mb: 6, p: 0, display: 'grid', gap: 1.5 }}>
        {SUPPLY_ITEMS.map((s) => (
          <Box component="li" key={s.item} sx={{ ...glass, listStyle: 'none', p: 2, display: 'grid', gap: 0.5 }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700 }}>{s.item}</Typography>
              <Chip
                size="small"
                label={s.status}
                sx={{ color: s.status === 'We supply' ? '#111' : '#fff', backgroundColor: s.status === 'We supply' ? '#a5d6a7' : 'rgba(255,255,255,0.2)', fontWeight: 700 }}
              />
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>{s.note}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Order planner</Typography>
      <Box sx={{ mb: 6 }}>
        <OrderPlanner />
      </Box>

      <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 0.5 }}>Sleeping bag prices</Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', mb: 2 }}>
        Cheapest first among bags actually rated for cold. Prices are per bag at one case, before shipping.
      </Typography>
      <Box sx={{ overflowX: 'auto', mb: 6 }}>
        <Box component="table" sx={{ ...glass, borderCollapse: 'collapse', width: '100%', minWidth: 640, color: '#fff' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              {['Bag', 'Rated for', 'Per bag', 'Winter-ready', 'Checked'].map((h) => (
                <Box component="th" key={h} sx={{ p: 1.5, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{h}</Box>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...BAG_OPTIONS].sort((a, b) => Number(b.winterReady) - Number(a.winterReady) || a.perBag - b.perBag).map((b) => (
              <Box component="tr" key={b.vendor + b.product} sx={{ borderTop: '1px solid rgba(255,255,255,0.12)', verticalAlign: 'top' }}>
                <Box component="td" sx={{ p: 1.5 }}>
                  <strong>{b.vendor}</strong>, {b.product}
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', mt: 0.5 }}>{b.note}</Typography>
                </Box>
                <Box component="td" sx={{ p: 1.5 }}>{b.rating}</Box>
                <Box component="td" sx={{ p: 1.5 }}>{usd(b.perBag)}</Box>
                <Box component="td" sx={{ p: 1.5, color: b.winterReady ? '#a5d6a7' : '#ffd27a', fontWeight: 700 }}>{b.winterReady ? 'Yes' : 'No'}</Box>
                <Box component="td" sx={{ p: 1.5, whiteSpace: 'nowrap' }}>{fmt(b.checked)}</Box>
              </Box>
            ))}
          </tbody>
        </Box>
      </Box>

      <Typography variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Before you buy</Typography>
      <Box component="ol" sx={{ color: 'rgba(255,255,255,0.9)', pl: 3, m: 0, display: 'grid', gap: 1 }}>
        <li>Check the Good360 catalog first. Donated bags cost nothing.</li>
        <li>Ask the vendor for nonprofit pricing and send the IRS determination letter.</li>
        <li>Confirm the temperature rating in writing. Listings from budget sellers are often optimistic.</li>
        <li>Check a partner&apos;s real headcount before you size the order.</li>
      </Box>
    </Container>
  );
}
