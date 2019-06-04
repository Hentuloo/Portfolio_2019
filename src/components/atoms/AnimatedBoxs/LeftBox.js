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
  transform: scaleY(0.4) scaleX(5) translate(20%, 120px);
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
   transform: scaleY(0.2) scaleX(5) translate(20%, 120px);
}
100%{
 transform: scaleY(0.4) scaleX(5) translate(20%, 120px);
}
`;
const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.redSecondary};
  width: 20%;
  height: 70%;
  left: 0%;
  top: 0%;
  ${({ currentPath, previousPath }) => {
    if (previousPath === 'portfolio' && currentPath === 'projekty') {
      return css`
        animation: ${portfolioProjekty} 0.8s linear forwards;
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
      `;
    }
    if (previousPath === 'projekty' && currentPath === 'portfolio') {
      return css`
        animation: ${portfolioProjekty} 0.8s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (previousPath === 'portfolio' && currentPath === 'kontakt') {
      return css`
        animation: ${portfolioKontakt} 0.8s linear forwards;
        transform: scaleY(0.4) scaleX(5) translate(20%, 120px);
      `;
    }
    if (previousPath === 'kontakt' && currentPath === 'portfolio') {
      return css`
        animation: ${portfolioKontakt} 0.8s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (previousPath === 'projekty' && currentPath === 'kontakt') {
      return css`
        animation: ${projektyKontakt} 0.8s linear forwards;
        transform: scaleY(0.4) scaleX(5) translate(20%, 120px);
      `;
    }
    if (previousPath === 'kontakt' && currentPath === 'projekty') {
      return css`
        animation: ${projektyKontakt} 0.8s linear reverse;
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
      `;
    }
    if (currentPath === 'portfolio')
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    if (currentPath === 'projekty')
      return css`
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
      `;
    if (currentPath === 'kontakt')
      return css`
        transform: scaleY(0.4) scaleX(5) translate(20%, 120px);
      `;
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;

const AnimatedBoxs = ({ currentPath, previousPath }) => (
  <Box currentPath={currentPath} previousPath={previousPath} />
);
AnimatedBoxs.propTypes = {
  currentPath: PropTypes.string,
  previousPath: PropTypes.string,
};
AnimatedBoxs.defaultProps = {
  currentPath: 'portfolio',
  previousPath: 'portfolio',
};
export default AnimatedBoxs;
