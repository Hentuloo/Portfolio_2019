import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';

import ContactPage from 'views/Contact/ContactPage';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ContactPage />
        </ThemeProvider>
    );
};
