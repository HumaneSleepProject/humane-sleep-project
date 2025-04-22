import { colors } from '../theme/colors';

export const buttonStyles = {
  primary: {
    backgroundColor: colors.primary.main,
    color: colors.text.primary,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: colors.primary.dark,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    }
  },
  secondary: {
    backgroundColor: 'transparent',
    color: colors.text.primary,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: `1px solid ${colors.border.light}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: colors.border.medium,
      backgroundColor: colors.background.overlay,
    }
  }
} 