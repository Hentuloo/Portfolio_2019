import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';
import langContext from 'context/langContext';
import pageContext from 'context/pageContext';

import Constants from 'config/Constants';

import SwitchViews from 'views/en/SwitchViews';

const lang = 'en';

class index extends Component {
    state = {
        previousPage: Constants[lang].PATHS.portfolio,
        currentPage: Constants[lang].PATHS.portfolio,
    };

    pages = Object.keys(Constants[lang].PATHS);

    componentDidMount() {
        const currentHash = window.location.hash.substring(1);
        const pageType = this.pages.find(page => {
            return Constants[lang].PATHS[page] === currentHash;
        });
        if (pageType) {
            this.setState({
                previousPage: Constants[lang].PATHS[pageType],
                currentPage: Constants[lang].PATHS[pageType],
            });
        }
    }

    handleChangePage = e => {
        const { currentPage } = this.state;
        if (e !== currentPage) {
            this.setState(prevState => {
                return { previousPage: prevState.currentPage, currentPage: e };
            });
        }
    };

    render() {
        const { previousPage, currentPage } = this.state;
        const pageContextValue = {
            onChangePage: this.handleChangePage,
            previousPage,
            currentPage,
        };
        const isPortfolio = currentPage === Constants[lang].PATHS.portfolio;
        return (
            <>
                <SEO />
                <ThemeProvider theme={theme}>
                    <pageContext.Provider value={pageContextValue}>
                        <langContext.Provider value={lang}>
                            <GlobalStyle />
                            <MainTemplate isPortfolio={isPortfolio}>
                                <SwitchViews page={currentPage} />
                            </MainTemplate>
                        </langContext.Provider>
                    </pageContext.Provider>
                </ThemeProvider>
            </>
        );
    }
}

export default index;
