import React, { useMemo } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Event } from '@/utils/events';

interface EventDialogProps {
  event: Event;
  open: boolean;
  onClose: () => void;
}

export default function EventDialog({ event, open, onClose }: EventDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Memoize the formatted date
  const formattedDate = useMemo(() => {
    return new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, [event.date]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(18, 18, 18, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          maxHeight: isMobile ? '90vh' : '80vh',
        }
      }}
    >
      <DialogTitle sx={{ color: 'white' }}>
        {event.title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          mt: 2
        }}>
          <Box sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            position: 'relative',
            height: { xs: '250px', md: '400px' },
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
              }}
              loading="lazy"
              quality={75}
            />
          </Box>
          <Box sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontWeight: 600,
                fontSize: '1.25rem'
              }}
            >
              Date & Time
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 2,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {formattedDate}
              {event.time && ` at ${event.time}`}
            </Typography>

            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontWeight: 600,
                fontSize: '1.25rem',
                mt: 2
              }}
            >
              Location
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              {event.location}
            </Typography>

            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontWeight: 600,
                fontSize: '1.25rem',
                mt: 2
              }}
            >
              Description
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                whiteSpace: 'pre-wrap'
              }}
            >
              {event.description}
            </Typography>

            {event.registrationUrl && (
              <Box sx={{ mt: 'auto', pt: 2 }}>
                <Button
                  variant="contained"
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    color: 'white',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1.5,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                    }
                  }}
                >
                  Register Now
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
} 