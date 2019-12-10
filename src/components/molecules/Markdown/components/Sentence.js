import styled, { css, keyframes } from 'styled-components';

const move = keyframes`
0%{
transform: translateY(0px);
}
10%{
transform: translateY(-6px);
}
30%{
transform: translateY(0px);
}
100%{
  transform: translateY(0px);
}
`;

const Sentence = styled.p`
  display: inline-block;
  transition: transform 0.4s ease;
    margin: 0px;
        padding: 0px 0px;

  ${({ currentPage }) => {
      if (currentPage === 'portfolio') {
          return css`
              box-sizing: border-box;
              padding-left: 20px;
              text-indent: -4px;
              @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                  padding-left: 24px;
                  text-indent: -10px;
              }
              &:hover {
                  transform: translateY(-6px);
                  cursor: pointer;
              }

              &:nth-of-type(1) {
                  animation: ${move} 4s 1s ease infinite;
              }
          `;
      }
      return css``;
  }}
        
    &:hover {
        transform: translateY(-3px);
        cursor: pointer;
    }

    &:nth-last-of-type(1){
    color: ${({ theme: { groupsColors } }) => groupsColors[5]};
    }
    &:nth-last-of-type(2){
    color: ${({ theme: { groupsColors } }) => groupsColors[3]};
    }
    &:nth-last-of-type(3){
    color: ${({ theme: { groupsColors } }) => groupsColors[2]};
    }
    &:nth-last-of-type(4){
    color: ${({ theme: { groupsColors } }) => groupsColors[1]};
    }
    &:nth-last-of-type(5) {
    color: ${({ theme: { groupsColors } }) => groupsColors[4]};
    }
  

    &:nth-of-type(1) {
    color: ${({ theme: { groupsColors } }) => groupsColors[5]};
    }
    &:nth-of-type(2) {
    color: ${({ theme: { groupsColors } }) => groupsColors[3]};
    }
    &:nth-of-type(3) {
    color: ${({ theme: { groupsColors } }) => groupsColors[2]};
    }
    &:nth-of-type(4) {
    color: ${({ theme: { groupsColors } }) => groupsColors[1]};
    }
    &:nth-of-type(5) {
    color: ${({ theme: { groupsColors } }) => groupsColors[6]};
    }

  }
`;

export default Sentence;
