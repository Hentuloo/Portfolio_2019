import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';

const index = () => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainTemplate typePage="first" />
      </>
    </ThemeProvider>
  </>
);

export default index;
