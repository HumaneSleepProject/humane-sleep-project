'use client';

import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert, Snackbar } from '@mui/material';
import { CONTACT_CONFIG } from '@/utils/constants';
import { pageStyles } from '@/styles/pages/contact/styles';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(CONTACT_CONFIG.formEndpoint, {
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
        setError(CONTACT_CONFIG.messages.error);
      }
    } catch {
      setError(CONTACT_CONFIG.messages.error);
    }
  };

  return (
    <Container maxWidth="sm" sx={pageStyles.container}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={pageStyles.title}
        >
          Contact Us
        </Typography>
        <Typography variant="h6" sx={pageStyles.subtitle}>
          Have a question or want to get involved? We&apos;d love to hear from you.
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={pageStyles.form}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={pageStyles.sectionTitle}>
            Your Information
          </Typography>
          <TextField
            required
            fullWidth
            label={CONTACT_CONFIG.fields.name.label}
            name="name"
            autoComplete={CONTACT_CONFIG.fields.name.autoComplete}
          />
          <TextField
            required
            fullWidth
            label={CONTACT_CONFIG.fields.email.label}
            name="email"
            type={CONTACT_CONFIG.fields.email.type}
            autoComplete={CONTACT_CONFIG.fields.email.autoComplete}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={pageStyles.sectionTitle}>
            Your Message
          </Typography>
          <TextField
            required
            fullWidth
            label={CONTACT_CONFIG.fields.subject.label}
            name="subject"
          />
          <TextField
            required
            fullWidth
            label={CONTACT_CONFIG.fields.message.label}
            name="message"
            multiline={CONTACT_CONFIG.fields.message.multiline}
            rows={CONTACT_CONFIG.fields.message.rows}
            sx={{ mb: 4 }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={pageStyles.submitButton}
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
          sx={pageStyles.alert}
        >
          {CONTACT_CONFIG.messages.success}
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
          sx={pageStyles.alert}
        >
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}