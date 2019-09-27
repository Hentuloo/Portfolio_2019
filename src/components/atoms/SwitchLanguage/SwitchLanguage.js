import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.graySecond};
  width: 40px;
  border: none;
  padding: 2px 0px;
  font-family: 'Rhodium Libre', serif;
  font-size: ${({ theme }) => theme.font.xxs};
  font-weight: ${({ theme }) => theme.font.bold};
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.redSecondary};
    `};
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    font-size: ${({ theme }) => theme.font.xxs};
    width: 40px;
    padding: 2px 0px;
    letter-spacing: 1px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 27%;
  position: fixed;
  right: 1%;
  top: 2px;
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    max-width: auto;
    left: 12px;
    top: 4px;
  }
`;

class SwitchLanguage extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Button active>PL</Button>
        <Button>ENG</Button>
      </Wrapper>
    );
  }
}

export default SwitchLanguage;
