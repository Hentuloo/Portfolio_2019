import { keyframes, css } from 'styled-components';

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
 transform: scaleY(0.3) scaleX(1) translate(0%, -19vh);
}
70%{
   transform: scaleY(0.3) scaleX(1) translate(-45%, -19vh);
}
100%{
 transform: scaleY(0.3) scaleX(2.7) translate(-36%, -19vh)
}
`;
const projektyKontakt = keyframes`
0%{
  transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
}
40%{
   transform: scaleY(0.3) scaleX(2.4) translate(-36%, -80px);
}
60%{
   transform: scaleY(0.3) scaleX(2.4) translate(-36%, -19vh);
}
100%{
 transform: scaleY(0.3) scaleX(2.7) translate(-36%, -19vh)
}
`;
const MobileRight = css`
  @media (max-width: ${({ theme }) => theme.breakPointMobile}) {
    ${({ currentPage, previousPage }) => {
      if (previousPage === 'portfolio' && currentPage === 'projekty') {
        return css`
          animation: ${portfolioProjekty} 0.8s linear forwards;
          transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
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
          transform: scaleY(0.3) scaleX(2.7) translate(-36%, -19vh);
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
          transform: scaleY(0.3) scaleX(2.7) translate(-36%, -19vh);
        `;
      }
      if (previousPage === 'kontakt' && currentPage === 'projekty') {
        return css`
          animation: ${projektyKontakt} 0.8s linear reverse;
          transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
        `;
      }
      if (currentPage === 'portfolio')
        return css`
          transform: scaleY(1) scaleX(1) translate(0%, 0%);
        `;
      if (currentPage === 'projekty')
        return css`
          transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
        `;
      if (currentPage === 'kontakt')
        return css`
          transform: scaleY(0.3) scaleX(2.7) translate(-36%, -19vh);
        `;
      return css`
        transform: scaleY(1) scaleX(1) translate(0%, 0%);
      `;
    }};
  }
`;

export default MobileRight;
