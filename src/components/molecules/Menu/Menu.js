import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListElement = styled.li`
  display: block;
  flex-basis: 33.333%;
  height: 100%;
  position: relative;

  a {
    position: absolute;
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.font.m};
    text-align: center;
    line-height: 100px;
    color: black;
  }
  a.active {
    background-color: ${({ theme }) => theme.redSecondary};
  }
`;
const MenuWrapper = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  height: 100px;
  bottom: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.redSecondary};
  ul {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;
const Menu = ({ onChangePage }) => {
  return (
    <MenuWrapper>
      <ul>
        <ListElement>
          <a href="/#portfolio" onClick={() => onChangePage('portfolio')}>
            Portfolio
          </a>
        </ListElement>
        <ListElement>
          <a href="/#projekty" onClick={() => onChangePage('projekty')}>
            Projekty
          </a>
        </ListElement>
        <ListElement>
          <a href="/#kontakt" onClick={() => onChangePage('kontakt')}>
            Kontakt
          </a>
        </ListElement>
      </ul>
    </MenuWrapper>
  );
};
Menu.propTypes = {
  onChangePage: PropTypes.func.isRequired,
};

export default Menu;
