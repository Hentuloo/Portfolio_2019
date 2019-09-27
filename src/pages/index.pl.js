import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';
import langContext from 'context/langContext';
import pageContext from 'context/pageContext';

import Constants from 'config/Constants';

import SwitchViews from 'views/pl/SwitchViews';

const lang = 'pl';

class index extends Component {
  state = {
    previousPage: Constants[lang].PATHS.portfolio,
    currentPage: Constants[lang].PATHS.portfolio,
  };

  pages = [...Constants[lang].PATHS];

  componentDidMount() {
    const pageType = window.location.hash.substring(1);
    if (this.pages.includes(pageType))
      this.setState({
        previousPage: pageType,
        currentPage: pageType,
      });
    if (pageType === Constants[lang].PATHS.contactSuccess) {
      // when form was send
      this.setState({
        previousPage: Constants[lang].PATHS.contact,
        currentPage: Constants[lang].PATHS.contact,
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
    return (
      <>
        <SEO />
        <ThemeProvider theme={theme}>
          <pageContext.Provider value={pageContextValue}>
            <langContext.Provider value={lang}>
              <GlobalStyle />
              <MainTemplate>
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
