import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import SEO from 'components/organisms/SEO';
import Menu from 'components/molecules/Menu/Menu';
import BackgroundBlock from 'components/atoms/BackgroundBlock/BackgroundBlock';

import FormNetlify from 'components/organisms/FormNetlify';

const ContactForm = () => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <FormNetlify />
          <Menu />
          <BackgroundBlock />
        </>
      </ThemeProvider>
    </>
  );
};

export default ContactForm;
