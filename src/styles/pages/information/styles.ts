export const pageStyles = {
  container: {
    minHeight: '100vh'
  },
  section: {
    py: 8,
    px: 4
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    mb: 8
  },
  mapContainer: {
    mb: 12
  },
  mapTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'white',
    mb: 4
  },
  mapWrapper: {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
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