import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';

export const layoutStyles = {
  container: {
    minHeight: '100vh',
    backgroundColor: colors.background.default,
  },
  section: {
    padding: spacing.section.padding,
  },
  content: {
    maxWidth: spacing.container.maxWidth,
    margin: '0 auto',
    padding: spacing.container.padding,
  },
  grid: {
    display: 'grid',
    gap: spacing.md,
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    }
  }
} 