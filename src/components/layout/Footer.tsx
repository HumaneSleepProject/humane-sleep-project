'use client';

import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 3, px: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 4 }}>
          <Box>
            <Typography variant="h6" color="inherit" gutterBottom>
              Humane Sleep Project
            </Typography>
            <Typography variant="body2" color="inherit">
              Providing Compassion, One Sleep at a Time
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
              A 501(c)(3) Nonprofit Organization
            </Typography>
            <Typography variant="body2" color="inherit">
              Tax ID: 93-1600778
            </Typography>
            <Link 
              href="https://apps.irs.gov/app/eos/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                }
              }}
            >
              <Typography variant="body2" sx={{ mt: 1 }}>
                Verify our nonprofit status
              </Typography>
            </Link>
          </Box>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
        </Box>
        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Humane Sleep Project. All rights reserved.
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ mt: 1 }}>
            Humane Sleep Project is a registered 501(c)(3) nonprofit organization. Tax ID: 93-1600778
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 