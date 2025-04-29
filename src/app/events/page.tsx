'use client';

import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { getStaticEvents } from '@/utils/events';

export default function Events() {
  const events = getStaticEvents();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Upcoming Events
      </Typography>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {events.map((event) => (
          <div key={event.id} style={{ 
            flex: '1 1 300px',
            maxWidth: '400px',
            minWidth: '300px'
          }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={event.imageUrl}
                alt={event.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {new Date(event.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {event.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                {event.registrationUrl && (
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
} 