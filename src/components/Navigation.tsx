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
    <List sx={{ 
      py: 2,
      background: `linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%)`,
    }}>
      {navigationItems.map((item) => (
        <ListItemButton 
          key={item.path}
          onClick={() => handleNavigation(item.path)}
          selected={pathname === item.path}
          sx={{
            mx: 2,
            my: 0.5,
            borderRadius: 2,
            transition: 'all 0.2s ease-in-out',
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
              },
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateX(4px)',
            },
          }}
        >
          <ListItemText 
            primary={item.label} 
            sx={{ 
              color: pathname === item.path ? 'white' : 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              '& .MuiTypography-root': {
                fontWeight: pathname === item.path ? 600 : 400,
              },
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
        background: `linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%)`,
        zIndex: 1200,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ 
        minHeight: { xs: 64, md: 72 },
        px: { xs: 2, md: 4 },
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexGrow: 1,
          gap: 2,
        }}>
          <Link 
            href="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              color: 'inherit',
              transition: 'transform 0.2s ease-in-out',
            }}
            className="hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="Humane Sleep Project Logo"
              width={48}
              height={48}
              style={{ 
                marginRight: '16px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
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
              sx={{ 
                ml: 'auto',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'rotate(90deg)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 280,
                  background: 'transparent',
                  border: 'none',
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
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.2s ease-in-out',
                '&.Mui-selected': {
                  color: 'white',
                  fontWeight: 600,
                },
                '&:hover': {
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
              },
            }}
          >
            {navigationItems.map((item) => (
              <Tab 
                key={item.path} 
                label={item.label}
                aria-label={`Navigate to ${item.label}`}
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
} 