export const pageStyles = {
  container: {
    minHeight: '100vh'
  },
  section: {
    py: 8,
    px: 4
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    mb: 8,
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
  sectionTitle: {
    fontWeight: 600,
    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.7rem' },
    color: 'white',
    mb: 4,
    textAlign: 'center',
  },
  mapContainer: {
    mb: 12,
    maxWidth: '1000px',
    mx: 'auto',
    width: '100%'
  },
  mapTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'white',
    mb: 4,
    textAlign: 'left'
  },
  mapWrapper: {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)'
    },
    gap: 8
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(8px)',
    padding: 6,
    borderRadius: '0.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    }
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: 'white',
    mb: 4
  },
  cardText: {
    color: 'rgba(255, 255, 255, 0.8)',
    mb: 4
  },
  list: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
    color: 'rgba(255, 255, 255, 0.8)'
  }
} as const; 