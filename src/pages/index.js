import '@openfonts/baloo-tamma_latin-ext';
import '@openfonts/roboto-mono_latin-ext';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate/index';
import SEO from 'components/organisms/SEO';

import SwitchTemplates from 'templates/SwitchTemplates';
import { Cursor } from 'components/molecules';

const App = () => {
    return (
        <>
            <SEO />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <SwitchTemplates />
                </MainTemplate>
                <Cursor />
            </ThemeProvider>
        </>
    );
};

export default App;
