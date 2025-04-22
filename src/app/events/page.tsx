import { Box, Typography, Button } from '@mui/material';
import { pageStyles } from '@/styles/pages/events/styles';

export default function Events() {
  return (
    <Box component="main" sx={pageStyles.container}>
      <Box component="section" sx={pageStyles.section}>
        <Box sx={{ maxWidth: '7xl', mx: 'auto' }}>
          <Typography variant="h1" sx={pageStyles.title}>
            Upcoming Events
          </Typography>
          <Box sx={pageStyles.eventsGrid}>
            {/* Event cards will go here */}
            <Box sx={pageStyles.eventCard}>
              <Typography variant="h3" sx={pageStyles.eventTitle}>
                Event Title
              </Typography>
              <Typography sx={pageStyles.eventDate}>
                Date and Time
              </Typography>
              <Typography sx={pageStyles.eventDescription}>
                Event description and details.
              </Typography>
              <Button 
                variant="contained" 
                sx={pageStyles.registerButton}
              >
                Register Now
              </Button>
            </Box>
            {/* Add more event cards as needed */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
} 