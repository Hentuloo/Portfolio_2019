import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const portfolioProjekty = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.2) scaleX(1) translate(0%, 300px);
}
100%{
 transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
}
`;
const portfolioKontakt = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.4) scaleX(1) translate(0%, 120px);
}

100%{
  transform: scaleY(0.4) scaleX(4) translate(20%, 120px);
}
`;
const projektyKontakt = keyframes`
0%{
    transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
}
40%{
   transform:scaleY(0.2) scaleX(3)  translate(20%, 120px);
}
70%{
   transform: scaleY(0.2) scaleX(4) translate(20%, 120px);
}
100%{
 transform: scaleY(0.4) scaleX(4) translate(20%, 120px);
}
`;
const Box = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.redSecondary};
  width: 27%;
  height: 70%;
  left: 0%;
  top: 0%;
  z-index: -2;
  will-change: transform;
  ${({ currentPage, previousPage }) => {
    if (previousPage === 'portfolio' && currentPage === 'projekty') {
      return css`
        animation: ${portfolioProjekty} 0.8s linear forwards;
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
      `;
    }
    if (previousPage === 'projekty' && currentPage === 'portfolio') {
      return css`
        animation: ${portfolioProjekty} 0.8s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (previousPage === 'portfolio' && currentPage === 'kontakt') {
      return css`
        animation: ${portfolioKontakt} 0.8s linear forwards;
        transform: scaleY(0.4) scaleX(4) translate(20%, 120px);
      `;
    }
    if (previousPage === 'kontakt' && currentPage === 'portfolio') {
      return css`
        animation: ${portfolioKontakt} 0.8s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (previousPage === 'projekty' && currentPage === 'kontakt') {
      return css`
        animation: ${projektyKontakt} 0.8s linear forwards;
        transform: scaleY(0.4) scaleX(4) translate(20%, 120px);
      `;
    }
    if (previousPage === 'kontakt' && currentPage === 'projekty') {
      return css`
        animation: ${projektyKontakt} 0.8s linear reverse;
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
      `;
    }
    if (currentPage === 'portfolio')
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    if (currentPage === 'projekty')
      return css`
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
      `;
    if (currentPage === 'kontakt')
      return css`
        transform: scaleY(0.4) scaleX(4) translate(20%, 120px);
      `;
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;

const AnimatedBoxs = ({ currentPage, previousPage }) => (
  <Box currentPage={currentPage} previousPage={previousPage} />
);
AnimatedBoxs.propTypes = {
  currentPage: PropTypes.string,
  previousPage: PropTypes.string,
};
AnimatedBoxs.defaultProps = {
  currentPage: 'portfolio',
  previousPage: 'portfolio',
};
export default AnimatedBoxs;
