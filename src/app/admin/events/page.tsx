'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  TextField, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
  Grid,
  Tabs,
  Tab
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import eventsData from '@/data/events.json';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationUrl: string | null;
}

interface EventsData {
  upcoming: Event[];
  past: Event[];
}

export default function EventsAdmin() {
  const [events, setEvents] = useState<EventsData>(eventsData);
  const [open, setOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState<Partial<Event>>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    imageUrl: '',
    registrationUrl: ''
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleOpen = (event?: Event) => {
    if (event) {
      setEditingEvent(event);
      setFormData(event);
    } else {
      setEditingEvent(null);
      setFormData({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        imageUrl: '',
        registrationUrl: ''
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingEvent(null);
  };

  const handleSubmit = async () => {
    const newEvent: Event = {
      ...formData as Event,
      id: editingEvent?.id || Date.now().toString()
    };

    const updatedEvents = { ...events };
    const eventList = currentTab === 0 ? 'upcoming' : 'past';

    if (editingEvent) {
      const index = updatedEvents[eventList].findIndex(e => e.id === editingEvent.id);
      updatedEvents[eventList][index] = newEvent;
    } else {
      updatedEvents[eventList].push(newEvent);
    }

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvents),
      });

      if (response.ok) {
        setEvents(updatedEvents);
        handleClose();
      } else {
        alert('Failed to save changes');
      }
    } catch (error) {
      console.error('Error saving events:', error);
      alert('Failed to save changes');
    }
  };

  const handleDelete = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    const updatedEvents = { ...events };
    const eventList = currentTab === 0 ? 'upcoming' : 'past';
    updatedEvents[eventList] = updatedEvents[eventList].filter(e => e.id !== eventId);

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvents),
      });

      if (response.ok) {
        setEvents(updatedEvents);
      } else {
        alert('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Events Management
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={currentTab} onChange={handleTabChange}>
          <Tab label="Upcoming Events" />
          <Tab label="Past Events" />
        </Tabs>
      </Box>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => handleOpen()}
        sx={{ mb: 3 }}
      >
        Add New Event
      </Button>

      <Grid container spacing={3}>
        {(currentTab === 0 ? events.upcoming : events.past).map((event) => (
          <Grid key={event.id} xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="h6">{event.title}</Typography>
                <Box>
                  <IconButton onClick={() => handleOpen(event)} size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(event.id)} size="small">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
              <Typography color="text.secondary" gutterBottom>
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {event.location}
              </Typography>
              <Typography variant="body2">
                {event.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingEvent ? 'Edit Event' : 'Add New Event'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              fullWidth
            />
            <TextField
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              fullWidth
            />
            <TextField
              label="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              fullWidth
            />
            <TextField
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              fullWidth
              multiline
              rows={4}
            />
            <TextField
              label="Image URL"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              fullWidth
            />
            <TextField
              label="Registration URL"
              value={formData.registrationUrl}
              onChange={(e) => setFormData({ ...formData, registrationUrl: e.target.value })}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
} 