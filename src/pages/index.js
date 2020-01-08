import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';
import LoadFonts from 'components/LoadFonts';

import SwitchTemplates from 'templates/SwitchTemplates';
import { Spiner, WhiteSpiner, BackgroundView } from 'components/atoms';
import { Cursor } from 'components/molecules';

import WithCursorProvider from 'hoc/WithCursorProvider';

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
                <WithCursorProvider>
                    {fontsLoaded ? (
                        <MainTemplate>
                            <SwitchTemplates />
                        </MainTemplate>
                    ) : (
                        <BackgroundView
                            white={<WhiteSpiner />}
                            gray={<Spiner />}
                        />
                    )}
                    <Cursor />
                </WithCursorProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
