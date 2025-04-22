'use client';

import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { PARTNERS, DONORS } from '@/utils/constants';

export default function PartnersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Partners Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: 'white',
              borderRadius: '2px',
            }
          }}
        >
          Our Partners
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 8 }}>
        {PARTNERS.map((partner, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                width: 180,
                height: 180,
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                mb: 2,
                border: '2px solid',
                borderColor: 'var(--primary-purple)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  borderColor: 'var(--secondary-purple)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(128, 0, 128, 0.3)'
                }
              }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                color: 'white',
                fontWeight: 600,
                fontSize: '1.1rem',
                minHeight: '2.5em',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              {partner.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Donors Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: 'white',
              borderRadius: '2px',
            }
          }}
        >
          Our Donors
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
        {DONORS.map((donor, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                width: 240,
                height: 160,
                position: 'relative',
                mb: 2,
              }}
            >
              <Image
                src={donor.logo}
                alt={`${donor.name} logo`}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Typography 
              variant="subtitle1" 
              component="h3"
              sx={{ 
                color: 'white',
                fontWeight: 500,
                fontSize: '1rem',
                minHeight: '2.5em',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              {donor.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
} 