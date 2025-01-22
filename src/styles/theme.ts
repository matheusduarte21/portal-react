export const colors = {
  primary: '#5200a0',
  secondary: '#3cabe0',
} as const;

export const theme = {
  colors: {
    primary: '#5200a0',
    secondary: '#3cabe0',
    background: '#f8f9fa',
    white: '#ffffff',
    text: '#2d3748',
    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
    }
  },
  transitions: {
    default: '0.3s ease-in-out',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
  }
} as const;