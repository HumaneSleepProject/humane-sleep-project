export const pageStyles = {
  container: {
    py: 8
  },
  title: {
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
  },
  subtitle: {
    mt: 4,
    mb: 2,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  form: {
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
  },
  sectionTitle: {
    mb: 2,
    color: 'white'
  },
  submitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    py: 1.5,
    fontSize: '1.1rem',
  },
  alert: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(8px)',
    color: 'white',
    '& .MuiAlert-icon': {
      color: 'white',
    },
  }
} as const; 