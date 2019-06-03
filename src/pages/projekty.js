import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';

const Projekty = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <MainTemplate typePage="second" />
    </>
  </ThemeProvider>
);

export default Projekty;
