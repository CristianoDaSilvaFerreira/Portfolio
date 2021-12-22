import { ThemeProvider } from 'styled-components';
import NextNprogess from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogess
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-left" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
