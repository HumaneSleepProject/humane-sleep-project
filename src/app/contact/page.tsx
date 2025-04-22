'use client';

import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert, Snackbar } from '@mui/material';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mldjknno', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setError('There was a problem sending your message. Please try again.');
      }
    } catch {
      setError('There was a problem sending your message. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: 'white',
              borderRadius: '2px',
            }
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
          Have a question or want to get involved? We&apos;d love to hear from you.
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(8px)',
          borderRadius: 2,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          p: { xs: 3, sm: 6 },
          '& .MuiTextField-root': {
            mb: 3,
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            },
          },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
            Your Information
          </Typography>
          <TextField
            required
            fullWidth
            label="Full Name"
            name="name"
            autoComplete="name"
          />
          <TextField
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
            Your Message
          </Typography>
          <TextField
            required
            fullWidth
            label="Subject"
            name="subject"
          />
          <TextField
            required
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={6}
            sx={{ mb: 4 }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            py: 1.5,
            fontSize: '1.1rem',
          }}
        >
          Send Message
        </Button>
      </Box>

      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={() => setSubmitted(false)}
      >
        <Alert 
          onClose={() => setSubmitted(false)} 
          severity="success"
          sx={{ 
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white',
            },
          }}
        >
          Thank you for your message! We&apos;ll get back to you soon.
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
      >
        <Alert 
          onClose={() => setError('')} 
          severity="error"
          sx={{ 
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white',
            },
          }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}