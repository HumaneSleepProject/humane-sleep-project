'use client';

import { usePathname, useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState, memo } from 'react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/utils/constants';

function Navigation() {
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
      {NAVIGATION_ITEMS.map((item) => (
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
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1200,
        boxShadow: 'none',
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
              src={SITE_CONFIG.logo}
              alt={`${SITE_CONFIG.name} Logo`}
              width={48}
              height={48}
              priority
              quality={90}
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
              {SITE_CONFIG.name}
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
            value={NAVIGATION_ITEMS.findIndex(item => item.path === pathname)}
            onChange={(_, newValue) => handleNavigation(NAVIGATION_ITEMS[newValue].path)}
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
            {NAVIGATION_ITEMS.map((item) => (
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

export default memo(Navigation); 