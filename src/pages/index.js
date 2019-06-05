import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/organisms/SEO';

import SwitchPage from './SwitchPage';

class index extends Component {
  state = {
    previousPage: 'portfolio',
    currentPage: 'portfolio',
  };

  handleChangePage = e => {
    console.log(e);
    this.setState(prevState => {
      console.log(prevState);
      return { previousPage: prevState.currentPage, currentPage: e };
    });
  };

  render() {
    console.log(this.state);
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
              <SwitchPage page={currentPage} />
            </MainTemplate>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default index;