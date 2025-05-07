import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DONORS } from '@/utils/constants';

export default function Donors() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.98) 100%)',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textAlign: 'center',
              background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Our Donors
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {DONORS.map((donor) => (
              <motion.div
                key={donor.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
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
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: isMobile ? '80px' : '120px',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                    }
                  }}
                >
                  <Image
                    src={donor.logo}
                    alt={donor.name}
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '8px'
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 