import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

const Button = styled.button`
  position: relative;
  width: 40px;
  padding: 2px 0px;
  border: none;
  border-radius: 4px;
  letter-spacing: 1px;
  font-family: 'Rhodium Libre', serif;
  font-size: ${({ theme }) => theme.font.xxs};
  font-weight: ${({ theme }) => theme.font.bold};
  background-color: ${({ theme }) => theme.graySecond};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.grayThird};
  }

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 100%;
    left: 0%;
    top: 0%;
    padding: 20px;
    opacity: 0.4;
  }
  &:nth-of-type(1) {
    &::before {
      transform: translateX(-25%);
    }
  }

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.redSecondary};
      &:hover {
        background-color: ${theme.redSecondary};
      }
    `};

  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 40px;
    padding: 2px 0px;
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.font.xxs};
    &::before {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  max-width: 27%;
  right: 8px;
  top: 2px;
  z-index: 20;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    max-width: auto;
    left: 12px;
    top: 4px;
  }
`;

class SwitchLanguage extends Component {
  state = {};

  handleClickButton = lang => {
    const {
      langContext,
      pageContext: { currentPage },
    } = this.props;
    if (lang !== langContext) {
      const allPaths = Object.keys(Constants[langContext].PATHS);
      const pageName = allPaths.find(
        path => Constants[langContext].PATHS[path] === currentPage,
      );
      if (pageName) {
        const { origin } = window.location;
        window.location.href = `${origin}/${lang}/#${
          Constants[lang].PATHS[pageName]
        }`;
        return;
      }
      window.location.href = `/${lang}/#${Constants[lang].PATHS.portfolio}`;
    }
  };

  render() {
    const { langContext } = this.props;
    return (
      <Wrapper>
        <Button
          type="button"
          active={langContext === 'pl'}
          onClick={() => this.handleClickButton('pl')}
        >
          PL
        </Button>
        <Button
          type="button"
          active={langContext === 'en'}
          onClick={() => this.handleClickButton('en')}
        >
          ENG
        </Button>
      </Wrapper>
    );
  }
}

SwitchLanguage.propTypes = {
  langContext: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    previousPage: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
    onChangePage: PropTypes.oneOfType([PropTypes.func, () => null]),
  }).isRequired,
};

export default withContext(SwitchLanguage);
