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
  missionText: {
    fontSize: { xs: '1.1rem', sm: '1.25rem' },
    lineHeight: 1.8,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  teamSection: {
    textAlign: 'center',
    mb: 8
  },
  teamTitle: {
    color: 'white',
    fontWeight: 700,
    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
    mb: 6
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)'
    },
    gap: 4
  },
  teamCard: {
    p: { xs: 2, sm: 4 },
    borderRadius: 4,
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      '& .team-image': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
      }
    }
  },
  teamImage: {
    width: { xs: 150, sm: 200 },
    height: { xs: 150, sm: 200 },
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    mb: 3,
    mx: 'auto',
    border: '3px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease-in-out',
  },
  memberName: {
    color: 'white',
    fontWeight: 600,
    mb: 1,
    fontSize: { xs: '1.25rem', sm: '1.5rem' }
  },
  memberRole: {
    color: 'rgba(255, 255, 255, 0.7)',
    mb: 2,
    fontSize: { xs: '0.9rem', sm: '1rem' }
  },
  memberBio: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.6,
    fontSize: { xs: '0.9rem', sm: '1rem' }
  }
} as const; 