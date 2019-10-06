import styled, { css } from 'styled-components';

const Comma = styled.span`
  ${({ pageType, dashLiteral }) => {
    if (pageType === 'projects') {
      switch (dashLiteral) {
        case 0:
          return css`
            display: none;
          `;
        case 1:
          return css`
            opacity: 0;
          `;
        case 2:
          return css``;
        default:
          return css``;
      }
    }
    return css``;
  }}
`;
export default Comma;
