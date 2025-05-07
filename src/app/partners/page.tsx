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
            sx={{
              ...pageStyles.partnerCard,
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out'
              }
            }}
            onClick={(e) => {
              e.preventDefault();
              if (partner.website) {
                window.open(partner.website, '_blank', 'noopener,noreferrer');
              }
            }}
            role="link"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && partner.website) {
                window.open(partner.website, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <Box
              sx={pageStyles.partnerImage}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                style={{
                  objectFit: 'contain',
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
            sx={{
              ...pageStyles.donorCard,
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out'
              }
            }}
            onClick={(e) => {
              e.preventDefault();
              if (donor.website) {
                window.open(donor.website, '_blank', 'noopener,noreferrer');
              }
            }}
            role="link"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && donor.website) {
                window.open(donor.website, '_blank', 'noopener,noreferrer');
              }
            }}
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