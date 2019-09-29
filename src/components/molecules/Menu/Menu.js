import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Constants from 'config/Constants';
import withContext from 'hoc/withContext';
import { compose } from 'recompose';

const ListElement = styled.li`
  display: block;
  flex-grow: 1;
  height: 100%;
  position: relative;
  &.hideMobile {
    display: none;
  }
  a {
    position: absolute;
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.font.s};
    text-align: center;
    line-height: 75px;
    color: ${({ theme }) => theme.black};
    text-transform: uppercase;
    &:nth-of-type(2) {
      width: auto;
      height: auto;
      transform: translate(90%, 2%);
      font-size: ${({ theme }) => theme.font.mini};
      text-decoration: underline;
      z-index: 10;
      @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        transform: translate(110%, 2%);
      }
    }
  }
  a.active {
    background-color: ${({ theme }) => theme.redSecondary};
  }

  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    flex-grow: 0;
    height: 25%;
    position: relative;
    &::before {
      position: absolute;
      top: 0%;
      content: '';
      width: 75%;
      height: 5px;
      background-color: black;
      border-radius: 25%;
    }
    &:last-of-type {
      &::after {
        position: absolute;
        bottom: 0%;
        content: '';
        width: 75%;
        height: 5px;
        background-color: black;
        border-radius: 25%;
      }
    }
    &.hideMobile {
      display: block;
    }
    a {
      line-height: 16.5vh;
      font-size: ${({ theme }) => theme.font.s};
      text-align: left;
      padding-left: 10px;
      font-family: 'Rhodium Libre', serif;
      font-weight: ${({ theme }) => theme.font.light};
    }
    a.active {
      background-color: transparent;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 120%;
        height: 60px;
        top: 60%;
        left: -10%;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.graySecond};
        z-index: -1;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
    a {
      line-height: 16.5vh;
      font-size: ${({ theme }) => theme.font.m};
    }
  }
`;
const MenuWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.redThird};
  z-index: 10;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 150px;
    height: 100vh;
    background-color: transparent;
    margin-left: 8px;
    ul {
      position: relative;
      flex-direction: column;
      flex-wrap: nowrap;
      height: 80%;
      width: 120px;
      top: 48%;
      transform: translateY(-50%);
    }
  }
`;
const Menu = props => {
  const {
    data,
    langContext,
    pageContext: { onChangePage, currentPage },
  } = props;

  const { pdf, pdfEng } = data.portfolio.mainPages[0];
  return (
    <MenuWrapper>
      <ul>
        <ListElement>
          <a
            href={`#${Constants[langContext].PATHS.portfolio}`}
            className={
              currentPage === Constants[langContext].PATHS.portfolio
                ? 'active'
                : ''
            }
            onClick={() => onChangePage(Constants[langContext].PATHS.portfolio)}
          >
            {Constants[langContext].PATHS.portfolio}
          </a>
        </ListElement>
        <ListElement>
          <a
            href={`#${Constants[langContext].PATHS.projects}`}
            className={
              currentPage === Constants[langContext].PATHS.projects
                ? 'active'
                : ''
            }
            onClick={() => onChangePage(Constants[langContext].PATHS.projects)}
          >
            {Constants[langContext].PATHS.projects}
          </a>
        </ListElement>
        <ListElement>
          <a
            href={`#${Constants[langContext].PATHS.contact}`}
            className={
              currentPage === Constants[langContext].PATHS.contact
                ? 'active'
                : ''
            }
            onClick={() => onChangePage(Constants[langContext].PATHS.contact)}
          >
            {Constants[langContext].PATHS.contact}
          </a>
        </ListElement>
        <ListElement className="hideMobile">
          <a
            href="https://github.com/Hentuloo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </ListElement>
        <ListElement className="hideMobile">
          <a href={pdf.url} target="_blank" rel="noopener noreferrer">
            CV
          </a>
          <a href={pdfEng.url} target="_blank" rel="noopener noreferrer">
            ENG
          </a>
        </ListElement>
      </ul>
    </MenuWrapper>
  );
};
Menu.propTypes = {
  langContext: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    previousPage: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
    onChangePage: PropTypes.oneOfType([PropTypes.func, () => null]),
  }).isRequired,
  data: PropTypes.objectOf(Object),
};
Menu.defaultProps = {
  data: null,
};

const withStaticQuery = Component => {
  return function componentWithQuery(...props) {
    return (
      <StaticQuery
        query={graphql`
          {
            portfolio {
              mainPages {
                pdf {
                  url
                }
                pdfEng {
                  url
                }
              }
            }
          }
        `}
        render={data => {
          return <Component {...props[0]} data={data} />;
        }}
      />
    );
  };
};

export default compose(
  withContext,
  withStaticQuery,
)(Menu);
