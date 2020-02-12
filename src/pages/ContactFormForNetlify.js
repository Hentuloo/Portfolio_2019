import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';

import ContactPage from 'pagesCreator/Contact/ContactPage';

const ContactFormForNetlify = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ContactPage />
        </ThemeProvider>
    );
};

export default ContactFormForNetlify;
