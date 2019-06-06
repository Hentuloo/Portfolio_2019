import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListElement = styled.li`
  display: block;
  flex-grow: 1;
  height: 100%;
  position: relative;

  a {
    position: absolute;
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.font.m};
    text-align: center;
    line-height: 80px;
    color: black;
  }
  a.active {
    background-color: ${({ theme }) => theme.redSecondary};
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
