import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';

const Kontakt = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <MainTemplate typePage="third" />
    </>
  </ThemeProvider>
);

export default Kontakt;
