import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import image from 'images/person.png';

const ImageWrapper = styled.div`
  position: absolute;
  top: 6%;
  right: 7%;
  width: 40%;
  height: 40%;
  img {
    position: absolute;
    max-width: 100%;
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
