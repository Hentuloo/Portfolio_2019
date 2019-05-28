import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { Link } from 'gatsby';

import { theme } from 'themes/mainTheme';

const Wrapper = styled.div`
  background-color: ${() => theme.bluePrimary};
`;
const index = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>Stronka moja</Wrapper>
  </ThemeProvider>
);

export default index;
