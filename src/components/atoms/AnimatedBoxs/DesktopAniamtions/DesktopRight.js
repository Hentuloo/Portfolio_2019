import { keyframes, css } from 'styled-components';

const portfolioProjekty = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
50%{
 transform: scaleY(0.5) scaleX(1) translate(0%, -50%);
}
70%{
 transform: scaleY(0.5) scaleX(1) translate(-6vw, -50%);
}
100%{
transform: scaleY(0.5) scaleX(2.8) translate(-6vw, -50%);
}
`;
const portfolioKontakt = keyframes`
0%{
transform: scaleY(1) scaleX(1) translate(0%, 0%);
}
50%{
 transform: scaleY(0.27) scaleX(1) translate(0%,  -36vh);
}
70%{
   transform: scaleY(0.27) scaleX(1) translate(-38%,  -36vh);
}
100%{
 transform: scaleY(0.27) scaleX(3.3) translate(-38%, -36vh);
}
`;
const projektyKontakt = keyframes`
0%{
   transform: scaleY(0.5) scaleX(2.8) translate(-6vw, -50%);
}
50%{
   transform:scaleY(0.27) scaleX(2.8) translate(-6vw, -36vh);
}
70%{
   transform:scaleY(0.27) scaleX(2.8) translate(-6vw, -36vh);
}
100%{
  transform: scaleY(0.27) scaleX(3.3) translate(-38%, -36vh);
}
`;

const DesktopRight = css`
  /* @media (max-width: ${({ theme }) => theme.breakPointMobile}) {
    ${({ currentPage, previousPage }) => {
      if (previousPage === 'portfolio' && currentPage === 'projekty') {
        return css`
          animation: ${portfolioProjekty} 0.8s linear forwards;
          transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
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
          transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
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
          transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
        `;
      }
      if (previousPage === 'kontakt' && currentPage === 'projekty') {
        return css`
          animation: ${projektyKontakt} 0.8s linear reverse;
          transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
        `;
      }
      if (currentPage === 'portfolio')
        return css`
          transform: scaleY(1) scaleX(1) translate(0%, 0%);
        `;
      if (currentPage === 'projekty')
        return css`
          transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
        `;
      if (currentPage === 'kontakt')
        return css`
          transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
        `;
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }};
  } */
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    ${({ currentPage, previousPage, pagesPaths }) => {
      if (
        previousPage === pagesPaths.portfolio &&
        currentPage === pagesPaths.projects
      ) {
        return css`
          animation: ${portfolioProjekty} 0.8s linear forwards;
          transform: scaleY(0.5) scaleX(2.8) translate(-6vw, -50%);
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
          transform: scaleY(0.27) scaleX(3.3) translate(-38%, -36vh);
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
          transform: scaleY(0.27) scaleX(3.3) translate(-38%, -36vh);
        `;
      }
      if (
        previousPage === pagesPaths.contact &&
        currentPage === pagesPaths.projects
      ) {
        return css`
          animation: ${projektyKontakt} 0.8s linear reverse;
          transform: scaleY(0.5) scaleX(2.8) translate(-6vw, -50%);
        `;
      }
      if (currentPage === pagesPaths.portfolio)
        return css`
          transform: scaleY(1) scaleX(1) translate(0%, 0%);
        `;
      if (currentPage === pagesPaths.projects)
        return css`
          transform: scaleY(0.5) scaleX(2.8) translate(-6vw, -50%);
        `;
      if (currentPage === pagesPaths.contact)
        return css`
          transform: scaleY(0.27) scaleX(3.3) translate(-38%, -36vh);
        `;
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }};
  }
`;
export default DesktopRight;
