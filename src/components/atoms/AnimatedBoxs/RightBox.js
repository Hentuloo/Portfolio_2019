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
  transform: scaleY(0.3) scaleX(3) translate(-45%,-50px)
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
 transform: scaleY(0.3) scaleX(3) translate(-45%,-50px)
}
`;
const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.redFirst};
  width: 26%;
  height: 33%;
  right: 0%;
  top: 0%;
  ${({ currentPath, previousPath }) => {
    if (previousPath === 'portfolio' && currentPath === 'projekty') {
      return css`
        animation: ${portfolioProjekty} 1s linear forwards;
        transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
      `;
    }
    if (previousPath === 'projekty' && currentPath === 'portfolio') {
      return css`
        animation: ${portfolioProjekty} 1s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (previousPath === 'portfolio' && currentPath === 'kontakt') {
      return css`
        animation: ${portfolioKontakt} 1s linear forwards;
        transform: scaleY(0.3) scaleX(3) translate(-45%, -50px);
      `;
    }
    if (previousPath === 'kontakt' && currentPath === 'portfolio') {
      return css`
        animation: ${portfolioKontakt} 1s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (previousPath === 'projekty' && currentPath === 'kontakt') {
      return css`
        animation: ${projektyKontakt} 1s linear forwards;
        transform: scaleY(0.3) scaleX(3) translate(-45%, -50px);
      `;
    }
    if (previousPath === 'kontakt' && currentPath === 'projekty') {
      return css`
        animation: ${projektyKontakt} 1s linear reverse;
        transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
      `;
    }
    if (currentPath === 'portfolio')
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    if (currentPath === 'projekty')
      return css`
        transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
      `;
    if (currentPath === 'kontakt')
      return css`
        transform: scaleY(0.3) scaleX(3) translate(-45%, -50px);
      `;
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;
const RightBox = ({ currentPath, previousPath }) => (
  <Box currentPath={currentPath} previousPath={previousPath} />
);

RightBox.propTypes = {
  currentPath: PropTypes.string,
  previousPath: PropTypes.string,
};
RightBox.defaultProps = {
  currentPath: 'portfolio',
  previousPath: 'portfolio',
};

export default RightBox;
