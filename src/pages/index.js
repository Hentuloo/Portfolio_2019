import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';
import LoadFonts from 'components/LoadFonts';

import SwitchTemplates from 'templates/SwitchTemplates';

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        LoadFonts(() => {
            setFontsLoaded(true);
        });
    }, []);

    return (
        <>
            <SEO />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {fontsLoaded && (
                    <MainTemplate>
                        <SwitchTemplates />
                    </MainTemplate>
                )}
            </ThemeProvider>
        </>
    );
};

export default App;
