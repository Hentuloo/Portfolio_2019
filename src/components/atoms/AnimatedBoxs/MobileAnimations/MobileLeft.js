import { keyframes, css } from 'styled-components';

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
 transform: scaleY(0.4) scaleX(1) translate(0%, 43vh);
}

100%{
  transform: scaleY(0.4) scaleX(4.3) translate(20%,43vh);
}
`;
const projektyKontakt = keyframes`
0%{
    transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
}
40%{
   transform:scaleY(0.2) scaleX(3)  translate(20%, 43vh);
}
70%{
   transform: scaleY(0.2) scaleX(4.3) translate(20%, 43vh);
}
100%{
 transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
}
`;

const MobileLeft = css`
  @media (max-width: ${({ theme }) => theme.breakPointMobile}) {
    ${({ currentPage, previousPage, pagesPaths }) => {
      if (
        previousPage === pagesPaths.portfolio &&
        currentPage === pagesPaths.projects
      ) {
        return css`
          animation: ${portfolioProjekty} 0.8s linear forwards;
          transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
        `;
      }
      if (
        previousPage === pagesPaths.projects &&
        currentPage === pagesPaths.portfolio
      ) {
        return css`
          animation: ${portfolioProjekty} 0.8s linear reverse;
          transform: scaleY(1) scaleX(1) translate(0%, 0%);
        `;
      }
      if (
        previousPage === pagesPaths.portfolio &&
        currentPage === pagesPaths.contact
      ) {
        return css`
          animation: ${portfolioKontakt} 0.8s linear forwards;
          transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
        `;
      }
      if (
        previousPage === pagesPaths.contact &&
        currentPage === pagesPaths.portfolio
      ) {
        return css`
          animation: ${portfolioKontakt} 0.8s linear reverse;
          transform: scaleY(1) scaleX(1) translate(0%, 0%);
        `;
      }
      if (
        previousPage === pagesPaths.projects &&
        currentPage === pagesPaths.contact
      ) {
        return css`
          animation: ${projektyKontakt} 0.8s linear forwards;
          transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
        `;
      }
      if (
        previousPage === pagesPaths.contact &&
        currentPage === pagesPaths.projects
      ) {
        return css`
          animation: ${projektyKontakt} 0.8s linear reverse;
          transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
        `;
      }
      if (currentPage === pagesPaths.portfolio)
        return css`
          transform: scaleY(1) scaleX(1) translate(0%, 0%);
        `;
      if (currentPage === pagesPaths.projects)
        return css`
          transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
        `;
      if (currentPage === pagesPaths.contact)
        return css`
          transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
        `;
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }};
  }
`;
export default MobileLeft;
