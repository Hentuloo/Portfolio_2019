import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const portfolioProjekty = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.3) scaleX(1) translate(0%, -80px);
}
100%{
 transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
}
`;
const portfolioKontakt = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
40%{
 transform: scaleY(0.3) scaleX(1) translate(0%, -50px);
}
70%{
   transform: scaleY(0.3) scaleX(1) translate(-45%, -50px);
}
100%{
  transform: scaleY(0.3) scaleX(2.7) translate(-45%,-50px)
}
`;
const projektyKontakt = keyframes`
0%{
  transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
}
40%{
   transform: scaleY(0.3) scaleX(2.4) translate(-45%, -80px);
}
60%{
   transform: scaleY(0.3) scaleX(2.4) translate(-45%, -50px);
}
100%{
 transform: scaleY(0.3) scaleX(2.7) translate(-45%,-50px)
}
`;
const Box = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.redFirst};
  width: 30%;
  height: 33%;
  right: 0%;
  top: 0%;
  z-index: -2;
  will-change: transform;
  ${({ currentPage, previousPage }) => {
    if (previousPage === 'portfolio' && currentPage === 'projekty') {
      return css`
        animation: ${portfolioProjekty} 0.8s linear forwards;
        transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
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
        transform: scaleY(0.3) scaleX(2.7) translate(-45%, -50px);
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
        transform: scaleY(0.3) scaleX(2.7) translate(-45%, -50px);
      `;
    }
    if (previousPage === 'kontakt' && currentPage === 'projekty') {
      return css`
        animation: ${projektyKontakt} 0.8s linear reverse;
        transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
      `;
    }
    if (currentPage === 'portfolio')
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    if (currentPage === 'projekty')
      return css`
        transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
      `;
    if (currentPage === 'kontakt')
      return css`
        transform: scaleY(0.3) scaleX(2.7) translate(-45%, -50px);
      `;
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;
const RightBox = ({ currentPage, previousPage }) => (
  <Box currentPage={currentPage} previousPage={previousPage} />
);

RightBox.propTypes = {
  currentPage: PropTypes.string,
  previousPage: PropTypes.string,
};
RightBox.defaultProps = {
  currentPage: 'portfolio',
  previousPage: 'portfolio',
};

export default RightBox;
