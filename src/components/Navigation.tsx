'use client';

import { usePathname, useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const drawer = (
    <List>
      {navigationItems.map((item) => (
        <ListItemButton 
          key={item.path}
          onClick={() => handleNavigation(item.path)}
          selected={pathname === item.path}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            },
          }}
        >
          <ListItemText 
            primary={item.label} 
            sx={{ 
              color: pathname === item.path ? 'white' : 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
            }} 
          />
        </ListItemButton>
      ))}
    </List>
  );

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
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 240,
                  backgroundColor: 'var(--primary-purple)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Tabs
            value={navigationItems.findIndex(item => item.path === pathname)}
            onChange={(_, newValue) => handleNavigation(navigationItems[newValue].path)}
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
        )}
      </Toolbar>
    </AppBar>
  );
} 