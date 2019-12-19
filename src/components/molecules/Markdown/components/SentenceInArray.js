import styled, { css, keyframes } from 'styled-components';

const randomSentencesJump = [4, 7, 23, 32];

const jump = keyframes`
  0% {
    transform: translateY(0px);
  }
  7% {
    transform: translateY(-6px);
  }
  14% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;

function jumpAnimationBuilder(number, delay) {
    const element = css`
        &:nth-of-type(${number}) {
            animation: ${jump} 10s ${delay}s ease infinite;
        }
    `;
    return element;
}

const SentenceInArray = styled.p`
  position: relative;
  display: inline-block;
  margin: 0px;
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-6px);
  }
  &::before {
    content: '';
    position: absolute;
    width: 115%;
    height: 110%;
    left: 0%;
    top: 0%;
  }
  ${jumpAnimationBuilder(randomSentencesJump[0], 4.5)}
  ${jumpAnimationBuilder(randomSentencesJump[1], 1.4)}
  ${jumpAnimationBuilder(randomSentencesJump[2], 3.5)}
  ${jumpAnimationBuilder(randomSentencesJump[3], 8)}

  ${({ groupID, theme: { groupsColors } }) => {
      switch (Number(groupID)) {
          case 1:
              return css`
                  color: ${groupsColors[6]};
              `;
          case 2:
              return css`
                  color: ${groupsColors[2]};
              `;
          case 3:
              return css`
                  color: ${groupsColors[1]};
              `;
          case 4:
              return css`
                  color: ${groupsColors[3]};
              `;
          case 5:
              return css`
                  color: ${groupsColors[4]};
              `;
          case 6:
              return css`
                  color: ${groupsColors[6]};
              `;
          case 7:
              return css`
                  color: ${groupsColors[0]};
              `;
          case 8:
              return css`
                  color: ${groupsColors[4]};
              `;
          default:
              return css`
                  color: ${groupsColors[0]};
              `;
      }
  }}
`;

export default SentenceInArray;
