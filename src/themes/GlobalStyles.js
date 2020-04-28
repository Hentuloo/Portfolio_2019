import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
  box-sizing:border-box;
}
  html{
    font-size:62.5%;
    cursor: none;
  }
  @media (min-width: 768px) {
    html {
    font-size:65.5%;
  }
  }
  @media (min-width: 1300px) {
    html {
    font-size:70.5%;
  }
  }
  @media (min-width: 1800px) {
    html {
    font-size:78.5%;
  }
  }
  body {
   font-size:1.6rem;
   /* font-family: 'Rhodium Libre', serif; */
   font-family: 'Baloo Tamma';
   font-weight: 700;
   margin:0px;
   letter-spacing: 1px;
   overflow-x:hidden;
   color: ${({ theme }) => theme.color.gray[4]};
  }

 .focus-only {
   color:white;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap; /* 1 */
}
.focus-only:active,
.focus-only:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
  white-space: inherit;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
  `;
export default GlobalStyle;
