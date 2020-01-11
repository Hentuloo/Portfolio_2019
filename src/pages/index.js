import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate/index';
import SEO from 'components/organisms/SEO';
import LoadFonts from 'components/LoadFonts';

import SwitchTemplates from 'templates/SwitchTemplates';
import { Spiner, WhiteSpiner, BackgroundView } from 'components/atoms';
import { Cursor } from 'components/molecules';

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
                {fontsLoaded ? (
                    <MainTemplate>
                        <SwitchTemplates />
                    </MainTemplate>
                ) : (
                    <BackgroundView white={<WhiteSpiner />} gray={<Spiner />} />
                )}
                <Cursor />
            </ThemeProvider>
        </>
    );
};

export default App;
