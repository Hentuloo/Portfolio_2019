import '@openfonts/baloo-tamma_latin-ext';
import '@openfonts/roboto_latin-ext';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';

import SwitchPages from 'pagesCreator/SwitchPages';
import { Cursor } from 'components/molecules';

const App = () => {
    return (
        <>
            <SEO />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <SwitchPages />
                </MainTemplate>
                <Cursor />
            </ThemeProvider>
        </>
    );
};

export default App;
