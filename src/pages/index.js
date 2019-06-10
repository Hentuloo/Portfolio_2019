import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';

import SwitchViews from 'views/SwitchViews';

class index extends Component {
  state = {
    previousPage: 'portfolio',
    currentPage: 'portfolio',
  };

  pages = ['portfolio', 'projekty', 'kontakt'];

  componentDidMount() {
    const pageType = window.location.hash.substring(1);
    if (this.pages.includes(pageType))
      this.setState({
        previousPage: pageType,
        currentPage: pageType,
      });
    if (pageType === 'kontakt-success') {
      // when form was send
      this.setState({
        previousPage: 'kontakt',
        currentPage: 'kontakt',
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
    return (
      <>
        <SEO />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <MainTemplate
              onChangePage={this.handleChangePage}
              previousPage={previousPage}
              currentPage={currentPage}
            >
              <SwitchViews page={currentPage} />
            </MainTemplate>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default index;
