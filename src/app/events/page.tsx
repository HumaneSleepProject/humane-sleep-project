'use client';

import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { getStaticEvents, Event } from '@/utils/events';
import { motion } from 'framer-motion';

export default function Events() {
  const events = getStaticEvents();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const EventCard = ({ event }: { event: Event }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        minWidth: isMobile ? '280px' : '320px',
        margin: '0 16px',
        flex: '0 0 auto'
      }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={event.imageUrl}
          alt={event.title}
          sx={{
            objectFit: 'cover',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        <CardContent sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
        }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              color: 'white',
              fontWeight: 600,
              fontSize: '1.5rem',
              mb: 1
            }}
          >
            {event.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            {new Date(event.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            {event.location}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              mt: 1,
              flexGrow: 1
            }}
          >
            {event.description}
          </Typography>
          {event.registrationUrl && (
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  color: 'white',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                  }
                }}
              >
                Register Now
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  const EventSection = ({ title, events }: { title: string; events: Event[] }) => (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          mb: 3,
          color: 'white',
          fontWeight: 600,
          fontSize: { xs: '1.75rem', md: '2.25rem' }
        }}
      >
        {title}
      </Typography>
      <Box sx={{ 
        display: 'flex',
        overflowX: 'auto',
        gap: 2,
        pb: 2,
        px: 1,
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.3)',
          },
        },
      }}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h1" 
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
        Events
      </Typography>

      <EventSection title="Upcoming Events" events={events.filter(e => new Date(e.date) >= new Date())} />
      <EventSection title="Past Events" events={events.filter(e => new Date(e.date) < new Date())} />
    </Container>
  );
} 