'use client';

import { usePathname, useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Partners', path: '/partners' },
  { label: 'Events', path: '/events' },
  { label: 'Information', path: '/information' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const currentTabIndex = navigationItems.findIndex(item => item.path === pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    router.push(navigationItems[newValue].path);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'var(--primary-purple)',
        zIndex: 1200,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Image
              src="/logo.png"
              alt="Humane Sleep Project Logo"
              width={40}
              height={40}
              style={{ marginRight: '16px' }}
            />
            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Humane Sleep Project
            </Typography>
          </Link>
        </Box>
        
        <Tabs
          value={currentTabIndex}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
            '& .MuiTab-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              '&.Mui-selected': {
                color: 'white',
              },
            },
          }}
        >
          {navigationItems.map((item) => (
            <Tab key={item.path} label={item.label} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
} 