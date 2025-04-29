'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { getEvents } from '@/utils/events';
import { pageStyles } from '@/styles/pages/events/styles';

export default async function Events() {
  const events = await getEvents();

  return (
    <Container maxWidth="lg" sx={pageStyles.container}>
      <Box sx={pageStyles.section}>
        <Typography variant="h1" sx={pageStyles.title}>
          Upcoming Events
        </Typography>
        <Grid container spacing={4} sx={pageStyles.eventsGrid}>
          {events
            .filter((event) => event.isActive)
            .map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card sx={pageStyles.eventCard}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.imageUrl}
                    alt={event.title}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" sx={pageStyles.eventTitle}>
                      {event.title}
                    </Typography>
                    <Chip
                      label={new Date(event.date).toLocaleDateString()}
                      sx={{ my: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {event.location}
                    </Typography>
                    <Typography variant="body1" sx={pageStyles.eventDescription}>
                      {event.description}
                    </Typography>
                    {event.registrationUrl && (
                      <Button
                        variant="contained"
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={pageStyles.registerButton}
                      >
                        Register Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
} 