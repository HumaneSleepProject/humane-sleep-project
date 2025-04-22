import { RESOURCE_MAP_URL } from '@/utils/constants';
import { pageStyles } from '@/styles/pages/information/styles';
import { Box, Typography } from '@mui/material';

export default function Information() {
  return (
    <Box component="main" sx={pageStyles.container}>
      <Box component="section" sx={pageStyles.section}>
        <Box sx={{ maxWidth: '7xl', mx: 'auto' }}>
          <Typography variant="h1" sx={pageStyles.title}>
            Information & Resources
          </Typography>
          
          {/* Map Section */}
          <Box sx={pageStyles.mapContainer}>
            <Typography variant="h2" sx={pageStyles.mapTitle}>
              Resource Map
            </Typography>
            <Box sx={pageStyles.mapWrapper}>
              <iframe
                src={RESOURCE_MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>

          <Box sx={pageStyles.cardsGrid}>
            {/* Information cards will go here */}
            <Box sx={pageStyles.card}>
              <Typography variant="h3" sx={pageStyles.cardTitle}>
                Sleep Health Basics
              </Typography>
              <Typography sx={pageStyles.cardText}>
                Essential information about sleep health and hygiene.
              </Typography>
              <Box component="ul" sx={pageStyles.list}>
                <li>Sleep duration recommendations</li>
                <li>Sleep hygiene tips</li>
                <li>Common sleep disorders</li>
              </Box>
            </Box>
            <Box sx={pageStyles.card}>
              <Typography variant="h3" sx={pageStyles.cardTitle}>
                Research & Studies
              </Typography>
              <Typography sx={pageStyles.cardText}>
                Latest research findings and studies about sleep.
              </Typography>
              <Box component="ul" sx={pageStyles.list}>
                <li>Recent sleep research</li>
                <li>Scientific publications</li>
                <li>Case studies</li>
              </Box>
            </Box>
            {/* Add more information cards as needed */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
} 