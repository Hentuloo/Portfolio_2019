import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';
import LoadFonts from 'components/LoadFonts';
import langContext from 'context/langContext';
import pageContext from 'context/pageContext';

import Constants from 'config/Constants';

import SwitchViews from 'views/pl/SwitchViews';

const lang = 'pl';

class index extends Component {
    state = {
        previousPage: 'portfolio',
        currentPage: 'portfolio',
        fontsLoaded: false,
    };

    pages = Object.keys(Constants[lang].PATHS);

    componentDidMount() {
        LoadFonts(() => {
            this.setState({ fontsLoaded: true });
        });
        const currentHash = window.location.hash.substring(1);
        if (currentHash !== '') {
            this.setState({
                previousPage: currentHash,
                currentPage: currentHash,
            });
        }
    }

    handleChangePage = (event, newPage) => {
        event.preventDefault();
        // set new hash
        window.history.pushState(null, null, `#${newPage}`);
        const { currentPage } = this.state;
        if (newPage !== currentPage) {
            window.scrollTo(0, 0);
            this.setState(prevState => {
                return {
                    previousPage: prevState.currentPage,
                    currentPage: newPage,
                };
            });
        }
    };

    render() {
        const { previousPage, currentPage, fontsLoaded } = this.state;
        const pageContextValue = {
            onChangePage: this.handleChangePage,
            previousPage,
            currentPage,
        };

        return (
            <>
                <SEO />
                <ThemeProvider theme={theme}>
                    <pageContext.Provider value={pageContextValue}>
                        <langContext.Provider value={lang}>
                            <GlobalStyle />
                            {fontsLoaded && (
                                <MainTemplate pageContext={pageContextValue}>
                                    <SwitchViews />
                                </MainTemplate>
                            )}
                        </langContext.Provider>
                    </pageContext.Provider>
                </ThemeProvider>
            </>
        );
    }
}

export default index;
