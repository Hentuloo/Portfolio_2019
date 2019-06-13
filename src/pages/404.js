import React, { Component } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import SEO from 'components/organisms/SEO';
import Menu from 'components/molecules/Menu/Menu';
import BackgroundBlock from 'components/atoms/BackgroundBlock/BackgroundBlock';

const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;

const Wrapper = styled.div`
  opacity: 0;
  animation: ${opacity} 0.5s 0.6s linear forwards;
  position: absolute;
  text-align: center;
  @media (min-width: ${() => theme.breakPointMobile}) {
    width: calc(100% - 200px);
    margin-top: 20vh;
    right: 0%;
  }
`;
class index extends Component {
  state = {};

  pages = ['portfolio', 'projekty', 'kontakt', 'kontakt-success'];

  componentDidMount() {
    const pageType = window.location.pathname.replace(/\//g, '');
    if (this.pages.includes(pageType)) {
      window.location.href = `/#${pageType}`;
    }
  }

  handleChangePage = e => {
    window.location.href = `/#${e}`;
  };

  render() {
    return (
      <>
        <SEO />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />

            <Wrapper>
              <h1>!Coś poszło nie tak spróbuj użyć menu by powrócić</h1>
            </Wrapper>

            <Menu onChangePage={this.handleChangePage} />
            <BackgroundBlock />
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default index;
