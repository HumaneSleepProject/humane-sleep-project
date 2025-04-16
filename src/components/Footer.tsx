'use client';

import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--primary-purple)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 3, px: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Humane Sleep Project
            </Typography>
            <Typography variant="body2" color="inherit">
              Dedicated to improving sleep health and awareness through education, research, and community support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/events" color="inherit" underline="hover">
                Events
              </Link>
              <Link href="/information" color="inherit" underline="hover">
                Resources
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://www.facebook.com/humanesleepproject" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://www.linkedin.com/company/humanesleepproject/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://www.instagram.com/humanesleepproject/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
              Email: HumaneSleepProject@gmail.com
            </Typography>
            <Typography variant="body2" color="inherit">
              Phone: (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" color="inherit" align="center">
            © {new Date().getFullYear()} Humane Sleep Project. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 