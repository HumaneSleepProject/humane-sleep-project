import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Switch,
  IconButton,
  Typography,
  Paper,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Event } from '@/data/events';

interface EventCMSProps {
  events: Event[];
  onAddEvent: (event: Omit<Event, 'id'>) => void;
  onEditEvent: (event: Event) => void;
  onDeleteEvent: (eventId: string) => void;
}

export const EventCMS: React.FC<EventCMSProps> = ({
  events,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
}) => {
  const [open, setOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<Omit<Event, 'id'>>({
    title: '',
    date: '',
    description: '',
    location: '',
    imageUrl: '',
    registrationUrl: '',
    isActive: true,
  });

  const handleOpen = (event?: Event) => {
    if (event) {
      setEditingEvent(event);
      setFormData(event);
    } else {
      setEditingEvent(null);
      setFormData({
        title: '',
        date: '',
        description: '',
        location: '',
        imageUrl: '',
        registrationUrl: '',
        isActive: true,
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingEvent(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      onEditEvent({ ...formData, id: editingEvent.id });
    } else {
      onAddEvent(formData);
    }
    handleClose();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Event Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add New Event
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gap: 2 }}>
        {events.map((event) => (
          <Paper
            key={event.id}
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h6">{event.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(event.date).toLocaleDateString()}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => handleOpen(event)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onDeleteEvent(event.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingEvent ? 'Edit Event' : 'Add New Event'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Box sx={{ display: 'grid', gap: 2 }}>
              <TextField
                label="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                fullWidth
              />
              <TextField
                label="Date"
                type="datetime-local"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                fullWidth
                multiline
                rows={4}
              />
              <TextField
                label="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
                fullWidth
              />
              <TextField
                label="Image URL"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                required
                fullWidth
              />
              <TextField
                label="Registration URL"
                value={formData.registrationUrl}
                onChange={(e) =>
                  setFormData({ ...formData, registrationUrl: e.target.value })
                }
                fullWidth
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                  />
                }
                label="Active"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {editingEvent ? 'Save Changes' : 'Add Event'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}; 