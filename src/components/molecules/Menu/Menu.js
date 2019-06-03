import React from 'react';
import { Link } from 'gatsby';
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
  height: 100px;
  bottom: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.redSecondary};
  font-family: 'Baloo Tamma', cursive;
  ul {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;
const Menu = () => {
  return (
    <MenuWrapper>
      <ul>
        <ListElement>
          <Link to="/" activeClassName="active">
            Portfolio
          </Link>
        </ListElement>
        <ListElement>
          <Link to="/projekty" activeClassName="active">
            Projekty
          </Link>
        </ListElement>
        <ListElement>
          <Link to="/kontakt" activeClassName="active">
            Kontakt
          </Link>
        </ListElement>
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
