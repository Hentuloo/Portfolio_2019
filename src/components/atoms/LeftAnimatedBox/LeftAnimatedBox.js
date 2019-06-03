import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fristSecond = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.3) scaleX(1) translate(0%, 300px);
}
100%{
 transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
}
`;
const fristThird = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
60%{
 transform: scaleY(0.6) scaleX(1) translate(0%, 120px);
}

100%{
  transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
}
`;
const secondThird = keyframes`
0%{
    transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
}
40%{
   transform: scaleY(0.3) scaleX(1.6) translate(20px, 120px);
}
70%{
   transform: scaleY(0.3) scaleX(2.5) translate(30px, 120px);
}
100%{
transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
}
`;
const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.redSecondary};
  width: 20%;
  height: 70%;
  left: 0%;
  top: 0%;
  ${({ presentType, pastType }) => {
    if (pastType === 'portfolio' && presentType === 'projekty') {
      // From first to Second 1=>2
      return css`
        animation: ${fristSecond} 1s linear forwards;
        transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
      `;
    }
    if (pastType === 'projekty' && presentType === 'portfolio') {
      // From first to Second 2=>1
      return css`
        animation: ${fristSecond} 1s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (pastType === 'portfolio' && presentType === 'kontakt') {
      // From first to Second 1=>3
      return css`
        animation: ${fristThird} 1s linear forwards;
        transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
      `;
    }
    if (pastType === 'kontakt' && presentType === 'portfolio') {
      // From first to Second 3=>1
      return css`
        animation: ${fristThird} 1s linear reverse;
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }
    if (pastType === 'projekty' && presentType === 'kontakt') {
      // From first to Second 2=>3
      return css`
        animation: ${secondThird} 1s linear forwards;
        transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
      `;
    }
    if (pastType === 'kontakt' && presentType === 'projekty') {
      // From first to Second 3=>2
      return css`
        animation: ${secondThird} 1s linear reverse;
        transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
      `;
    }
    if (presentType === 'portfolio')
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    if (presentType === 'projekty')
      return css`
        transform: scaleY(0.3) scaleX(1.6) translate(20px, 300px);
      `;
    if (presentType === 'kontakt')
      return css`
        transform: scaleY(0.6) scaleX(2.5) translate(30px, 120px);
      `;
    return css`
      transform: scaleY(1) scaleX(1) translate(0%, 0%);
    `;
  }};
`;

const LeftAnimatedBox = () => {
  let { previousPath } = window;
  let currentPath = window.location.pathname;
  if (
    previousPath === undefined ||
    previousPath === '' ||
    previousPath === '/'
  ) {
    previousPath = 'portfolio';
  } else {
    previousPath = previousPath.substring(1);
  }
  if (currentPath === undefined || currentPath === '' || currentPath === '/') {
    currentPath = 'portfolio';
  } else {
    currentPath = window.location.pathname.substring(1);
  }
  // console.log(previousPath);
  // console.log(currentPath);
  return <Box presentType={currentPath} pastType={previousPath} />;
};

export default LeftAnimatedBox;
