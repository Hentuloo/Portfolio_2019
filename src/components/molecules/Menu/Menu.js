import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    color: black;
    text-transform: uppercase;
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
        height: 40px;
        top: 50%;
        left: -10%;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.graySecond};
        z-index: -1;
      }
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
      height: 70%;
      width: 120px;
      top: 45%;
      transform: translateY(-50%);
    }
  }
`;
const Menu = ({ onChangePage, currentPage }) => {
  return (
    <MenuWrapper>
      <ul>
        <ListElement>
          <a
            href="#portfolio"
            className={currentPage === 'portfolio' ? 'active' : ''}
            onClick={() => onChangePage('portfolio')}
          >
            {/* href="#portfolio"  for gh-pages */}
            Portfolio
          </a>
        </ListElement>
        <ListElement>
          <a
            href="#projekty"
            className={currentPage === 'projekty' ? 'active' : ''}
            onClick={() => onChangePage('projekty')}
          >
            Projekty
          </a>
        </ListElement>
        <ListElement>
          <a
            href="#kontakt"
            className={currentPage === 'kontakt' ? 'active' : ''}
            onClick={() => onChangePage('kontakt')}
          >
            Kontakt
          </a>
        </ListElement>
        <ListElement className="hideMobile">
          <a href="https://github.com">Github</a>
        </ListElement>
      </ul>
    </MenuWrapper>
  );
};
Menu.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
};
Menu.defaultProps = {
  currentPage: 'portfolio',
};
export default Menu;
