import {
  createTheme,
  CssBaseline,
  ThemeProvider
  // PaletteColor
} from '@mui/material';
import BellefairWoff2 from './font/bellefair/Bellefair-Regular.woff2';

// Augment the palette to include a salmon color
declare module '@mui/material/styles' {
  interface Palette {
    salmon: Palette['primary'];
  }

  interface PaletteOptions {
    salmon?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include a salmon option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    salmon: true;
  }
}

type ThemeProp = {
  children: JSX.Element;
};

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#0B0D17'
    },
    secondary: {
      main: '#D0D6F9'
    },
    salmon: theme.palette.augmentColor({
      color: {
        main: '#FF5733'
      },
      name: 'salmon'
    })
  },
  typography: {
    fontFamily: ['Bellefair', 'sans-serif'].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Bellefair';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Bellefair'), local('Bellefair-Regular'), url(${BellefairWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
