import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';

import ContactTemplate from 'templates/ContactTemplate';

const ContactFormForNetlify = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ContactTemplate />
        </ThemeProvider>
    );
};

export default ContactFormForNetlify;
