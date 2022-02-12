import { theme } from 'theme';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';

function ThemeProvider({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      { children }
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
