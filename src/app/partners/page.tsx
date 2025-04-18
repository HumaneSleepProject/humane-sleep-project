'use client';

import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';

const partners = [
  { name: 'Salesforce', logo: '/partners/salesforce.PNG' },
  { name: 'Movement Lab Chiropractic', logo: '/partners/movement_lab.png' },
  { name: 'Livermore Symphony', logo: '/partners/livermore_symphony.jpg' },
  { name: 'Cornerstone Church', logo: '/partners/cornerstone_church.png' },
  { name: 'Shepherd\'s Gate', logo: '/partners/shepherds_gate.jpg' },
];


const donors = [
  { name: 'Rotary Club of Livermore', logo: '/donors/livermore_rotary.JPG' },
  { name: 'Kannada Koota of Northern California', logo: '/donors/kannada_koota_of_northern_california.JPG' },
  { name: 'Bollywood 92.3', logo: '/donors/bollywood_923.JPG' },
  { name: 'Organizing with Love LLC', logo: '/donors/organizing_with_love_llc.PNG' },
  { name: 'Del Valle Continuation School', logo: '/donors/del_valle_continuation_school.png' },
  { name: 'Sewa Diwali', logo: '/donors/sewa_diwali.jpeg' },
  { name: 'Tri Valley Kannada Sangha', logo: '/donors/tri_valley_kannada_sangha.JPG' },
  { name: 'Tri Valley 30 TV', logo: '/donors/tri_valley_30_tv.JPG' },
  { name: 'Livermore Police Department', logo: '/donors/livermore_police.jpg' },
  { name: 'Goodness Village', logo: '/donors/goodness_village.jpg' },
];

export default function PartnersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Partners Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            color: 'var(--primary-purple)',
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
              backgroundColor: 'var(--primary-purple)',
              borderRadius: '2px',
            }
          }}
        >
          Our Partners
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 8 }}>
        {partners.map((partner, index) => (
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
                color: 'var(--primary-purple)',
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
            color: 'var(--primary-purple)',
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
              backgroundColor: 'var(--primary-purple)',
              borderRadius: '2px',
            }
          }}
        >
          Our Donors
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
        {donors.map((donor, index) => (
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
                color: 'var(--primary-purple)',
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