import React from 'react';
import styled, { keyframes } from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import image from 'images/person300.png';

const imageAnimation = keyframes`
form{
  transform:translateY(-100%);
}
to{
  transform:translateY(0%);
}
`;
// const opacity = keyframes`
// from{
// opacity:0;
// }
// to{
// opacity:1;
// }
// `;

const ImageWrapper = styled.div`
  position: absolute;
  top: 6%;
  right: 7%;
  width: 40%;
  height: 40%;
  overflow: hidden;
  img {
    position: absolute;
    max-width: 100%;
    transform: translateY(-100%);
    will-change: transform;
    animation: ${imageAnimation} 0.5s 0.6s ease-in-out forwards;
  }
`;
const HeaderName = styled(Paragraph)`
  width: 50%;
  margin: 5% 2%;
  word-spacing: 30px;
  font-size: ${({ theme }) => theme.font.l};
  line-height: ${({ theme }) => theme.font.l};
`;

const Portfolio = () => {
  return (
    <section>
      <HeaderName as="h2">Kamil Chędkowski</HeaderName>
      <ImageWrapper>
        <img src={image} alt="Moja skromna osoba" />
      </ImageWrapper>
    </section>
  );
};

export default Portfolio;
