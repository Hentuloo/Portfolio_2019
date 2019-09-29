import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';

import langContext from 'context/langContext';
import pageContext from 'context/pageContext';

import ContactTemplate from 'templates/ContactTemplate';

const ContactFormForNetlify = () => {
  return (
    <ThemeProvider theme={theme}>
      <pageContext.Provider>
        <langContext.Provider value="en">
          <GlobalStyle />
          <ContactTemplate />
        </langContext.Provider>
      </pageContext.Provider>
    </ThemeProvider>
  );
};

export default ContactFormForNetlify;
