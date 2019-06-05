import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Markdown from 'components/molecules/Markdown/Markdown';

const imageAnimation = keyframes`
form{
  transform:translateY(-100%);
}
to{
  transform:translateY(0%);
}
`;
const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;

const MarkdownWrapper = styled.div`
  position: absolute;
  width: 90%;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  opacity: 0;
  animation: ${opacity} 0.5s 0.6s linear forwards;
`;
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
    max-height: 80vh;
    transform: translateY(-100%);
    will-change: transform;
    animation: ${imageAnimation} 0.5s 0.6s ease-in-out forwards;
  }
`;
const HeaderName = styled(Paragraph)`
  width: 50%;
  margin: 5% 2%;
  word-spacing: 50px;
  font-size: ${({ theme }) => theme.font.l};
  line-height: ${({ theme }) => theme.font.l};
`;

const Portfolio = ({ data }) => {
  const { fluid } = data.myImage.childImageSharp;
  const { content } = data.portfolio.mainPages[0];
  return (
    <section>
      <HeaderName as="h2">Kamil Chędkowski</HeaderName>
      <ImageWrapper>
        <Img alt="Moja skromna osoba" fluid={fluid} />
      </ImageWrapper>
      <MarkdownWrapper>
        <Markdown markdown={content} />
      </MarkdownWrapper>
    </section>
  );
};
Portfolio.propTypes = {
  data: PropTypes.objectOf(Object),
};
Portfolio.defaultProps = {
  data: null,
};
export default () => (
  <StaticQuery
    query={graphql`
      {
        myImage: file(relativePath: { eq: "person.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
        portfolio {
          mainPages {
            content
          }
        }
      }
    `}
    render={data => <Portfolio data={data} />}
  />
);
