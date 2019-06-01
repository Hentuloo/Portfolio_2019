import styled, { css, keyframes } from 'styled-components';

const rectangle = keyframes`
    0%{
        transform:scaleY(1) scaleX(1) translate(0%,50%);
    }
    50%{
        transform:scaleY(1) scaleX(1) translate(0%,50%);

    }
    100%{
         transform: translate(0%,0%);
    }
`;
const center = keyframes`
    0%{
        transform:scaleY(1) scaleX(1) translate(0%,50%);
    }
    50%{
        transform:scaleY(0.3) scaleX(1.3) translate(0%,50%);

    }
    100%{
         transform:scaleY(0.3) scaleX(1.3)  translate(-100%,50%);
    }
`;

const RightAnimatedBox = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.redFirst};
    width: 200px;
    height: 300px;
    right: 0%;
    top: 0%;
    transform: scaleY(0.3) scaleX(1) translate(0%, 50%);
    ${({ type }) =>
      type === 'rectangle' &&
      css`
        /* animation: ${rectangle} 2s linear forwards; */
      `}
    ${({ type }) =>
      type === 'center' &&
      css`
        animation: ${center} 2s linear forwards;
      `}
  }
`;
export default RightAnimatedBox;
