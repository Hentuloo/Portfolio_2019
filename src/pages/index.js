import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { Link } from 'gatsby';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';

const Wrapper = styled.div`
  background-color: ${() => theme.redSecondary};
`;
const index = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Wrapper>Stronka moja</Wrapper>
    </>
  </ThemeProvider>
);

export default index;
