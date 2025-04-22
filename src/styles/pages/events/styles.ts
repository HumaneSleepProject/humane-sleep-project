import { layoutStyles } from '@/styles/components/layout';
import { cardStyles } from '@/styles/components/cards';
import { buttonStyles } from '@/styles/components/buttons';
import { typography } from '@/styles/theme/typography';
import { spacing } from '@/styles/theme/spacing';
import { colors } from '@/styles/theme/colors';

export const pageStyles = {
  container: {
    ...layoutStyles.container,
    py: 8,
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  section: {
    ...layoutStyles.section,
    backgroundColor: 'transparent'
  },
  content: {
    ...layoutStyles.content,
    backgroundColor: 'transparent'
  },
  title: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: spacing.xl,
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
  eventsGrid: {
    ...layoutStyles.grid,
    marginTop: spacing.lg,
  },
  eventCard: {
    ...cardStyles.base,
    ...cardStyles.interactive,
    ...cardStyles.glass,
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
    gap: spacing.sm,
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  },
  eventTitle: {
    ...typography.h3,
    textShadow: '0 0 5px rgba(255, 255, 255, 0.2)',
  },
  eventDate: {
    ...typography.body2,
    color: colors.text.secondary,
  },
  eventDescription: {
    ...typography.body1,
    color: colors.text.primary,
  },
  registerButton: {
    ...buttonStyles.primary,
    width: '100%',
    marginTop: spacing.sm,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 122, 255, 0.3)',
    }
  }
} as const; 