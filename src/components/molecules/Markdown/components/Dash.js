import styled, { css } from 'styled-components';

const Dash = styled.span`
  color: pink;
  display: inline;

  ${({ pageType, openDashLiteral, closedDashLiteral }) => {
    if (pageType === 'projects') {
      if (openDashLiteral) {
        switch (openDashLiteral) {
          case 1:
            return css`
              display: none;
              @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                display: inline-block;
              }
            `;
          case 2:
            return css`
              position: absolute;
              left: 1px;
              @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                position: relative;
              }
            `;
          default:
            return css``;
        }
      }
      if (closedDashLiteral) {
        switch (closedDashLiteral) {
          case 1:
            return css`
              display: none;
              @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                display: block;
              }
            `;
          case 2:
            return css`
              position: absolute;
              right: 2px;
              @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                position: relative;
              }
              &::after {
                content: '';
                position: absolute;
                width: 80vw;
                height: 1px;
                right: 5vw;
                bottom: 0%;
                background-color: ${({ theme }) => theme.redFirst};
                opacity: 0.4;
                @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                  display: none;
                }
              }
            `;
          default:
            return css``;
        }
      }
    }
    return css``;
  }}
`;

export default Dash;
