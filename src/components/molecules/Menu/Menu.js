import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Constants from 'config/Constants';
import withContext from 'hoc/withContext';
import { compose } from 'recompose';

const ListElement = styled.li`
  display: block;
  flex-grow: 1;
  height: 100%;
  position: relative;
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
  }

  &.hideMobile {
    display: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      display: block;
    }
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
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      line-height: 16.5vh;
      font-size: ${({ theme }) => theme.font.m};
      text-align: left;
      padding-left: 10px;
      font-family: ${({ theme }) => theme.font.second};
      font-weight: ${({ theme }) => theme.font.light};
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
      line-height: 16.5vh;
    }
    &:hover {
      span {
        text-decoration: underline;
      }
    }
    &:nth-of-type(2) {
      width: auto;
      height: auto;
      transform: translate(95%, 2%);
      font-size: ${({ theme }) => theme.font.mini};
      padding-right: 25px;
      z-index: 10;
      @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        transform: translate(110%, 2%);
      }
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      position: absolute;
      font-size: ${({ theme }) => theme.font.mini};
      transform: translate(-15%, 2%);
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
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 150px;
    height: 100vh;
    background-color: transparent;
    margin-left: 8px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 33.3333vw;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: ${({ theme }) => theme.redSecondary};
    transition: transform 0.8s ease-in-out;

    ${({ currentPage, langContext }) => {
      const { portfolio, projects, contact } = Constants[langContext].PATHS;
      switch (currentPage) {
        case portfolio:
          return css`
            transform: translateX(0vw);
          `;
        case projects:
          return css`
            transform: translateX(33.3333vw);
          `;
        case contact:
          return css`
            transform: translateX(66.6666vw);
          `;
        default:
          return css`
            transform: translateX(0vw);
          `;
      }
    }}
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      width: 120%;
      height: 60px;
      left: -10%;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.graySecond};

       ${({ currentPage, langContext }) => {
         const { portfolio, projects, contact } = Constants[langContext].PATHS;

         switch (currentPage) {
           case portfolio:
             return css`
               transform: translateY(13vh);
             `;
           case projects:
             return css`
               transform: translateY(29vh);
             `;
           case contact:
             return css`
               transform: translateY(45vh);
             `;
           default:
             return css`
               transform: translateX(13vh);
             `;
         }
       }}
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
      width: 140%;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
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
    <MenuWrapper currentPage={currentPage} langContext={langContext}>
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
          <a href={pdfEng.url} target="_blank" rel="noopener noreferrer">
            CV<span>ENG</span>
          </a>
          <a href={pdf.url} target="_blank" rel="noopener noreferrer">
            |pl
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
