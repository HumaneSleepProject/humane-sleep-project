import { colors } from '../theme/colors';

export const cardStyles = {
  base: {
    backgroundColor: colors.background.paper,
    borderRadius: '0.5rem',
    padding: '1.5rem',
    border: `1px solid ${colors.border.light}`,
    transition: 'all 0.3s ease',
  },
  interactive: {
    '&:hover': {
      borderColor: colors.border.medium,
      transform: 'translateY(-2px)',
    }
  },
  glass: {
    backgroundColor: colors.background.overlay,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${colors.border.light}`,
  }
} 