'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Card,
  CardContent,
  Tabs,
  Tab
} from '@mui/material';
import { motion } from 'framer-motion';
import { Event, EventsData } from '@/utils/events';
import eventsData from '@/data/events.json';
import EventDialog from '@/components/events/EventDialog';
import Image from 'next/image';

export default function Events() {
  const [events] = useState<EventsData>(eventsData);
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const EventCard = ({ event }: { event: Event }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        width: '100%',
        position: 'relative'
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
          cursor: 'pointer',
          maxHeight: '500px',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
          }
        }}
        onClick={() => setSelectedEvent(event)}
      >
        <Box sx={{ 
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 aspect ratio
          overflow: 'hidden'
        }}>
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 280px, 320px"
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
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
              flexGrow: 1,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '4.5em',
              lineHeight: '1.5em'
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
                onClick={(e) => e.stopPropagation()}
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

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mb: 4 
      }}>
        <Tabs 
          value={currentTab} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              '&.Mui-selected': {
                color: 'white',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab label="Upcoming Events" />
          <Tab label="Past Events" />
        </Tabs>
      </Box>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 3,
        pb: 2,
        px: 1
      }}>
        {(currentTab === 0 ? events.upcoming : events.past).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>

      {selectedEvent && (
        <EventDialog
          event={selectedEvent}
          open={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </Container>
  );
} 