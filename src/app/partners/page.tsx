'use client';

import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { PARTNERS, DONORS } from '@/utils/constants';
import { pageStyles } from '@/styles/pages/partners/styles';

export default function PartnersPage() {
  return (
    <Container maxWidth="lg" sx={pageStyles.container}>
      {/* Partners Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={pageStyles.title}
        >
          Our Partners
        </Typography>
      </Box>

      <Box sx={pageStyles.partnersGrid}>
        {PARTNERS.map((partner, index) => (
          <Box
            key={index}
            sx={pageStyles.partnerCard}
          >
            <Box
              sx={pageStyles.partnerImage}
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
              sx={pageStyles.partnerName}
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
          sx={pageStyles.title}
        >
          Our Donors
        </Typography>
      </Box>

      <Box sx={pageStyles.donorsGrid}>
        {DONORS.map((donor, index) => (
          <Box
            key={index}
            sx={pageStyles.donorCard}
          >
            <Box
              sx={pageStyles.donorImage}
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
              sx={pageStyles.donorName}
            >
              {donor.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
} 