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
  partnersGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
    gap: 4,
    mb: 8
  },
  partnerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  partnerImage: {
    width: 180,
    height: 180,
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    mb: 2,
    border: '2px solid',
    borderColor: 'var(--primary-purple)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderColor: 'var(--secondary-purple)',
      transform: 'scale(1.05)',
      boxShadow: '0 0 20px rgba(128, 0, 128, 0.3)'
    }
  },
  partnerName: {
    color: 'white',
    fontWeight: 600,
    fontSize: '1.1rem',
    minHeight: '2.5em',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  donorsGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
    gap: 4
  },
  donorCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  donorImage: {
    width: 240,
    height: 160,
    position: 'relative',
    mb: 2,
  },
  donorName: {
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    minHeight: '2.5em',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center'
  }
} as const; 