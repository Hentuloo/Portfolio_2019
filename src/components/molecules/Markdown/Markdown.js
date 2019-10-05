import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  white-space: pre-wrap;
  font-family: ${({ theme }) => theme.font.second};
  background-color: ${({ theme }) => theme.graySecond};
  font-size: ${({ theme }) => theme.font.xxs};
  line-height: ${({ theme }) => theme.font.xs};
  padding: 4px 10px;
  z-index: 2;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    font-size: ${({ theme }) => theme.font.xs};
    line-height: ${({ theme }) => theme.font.s};
  }
  @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
    font-size: ${({ theme }) => theme.font.s};
    line-height: ${({ theme }) => theme.font.l};
  }
`;
const Markdown = ({ markdown }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: markdown }} />
);

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Markdown;
