import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  white-space: pre-wrap;
  font-family: 'Rhodium Libre', serif;
  background-color: ${({ theme }) => theme.graySecond};
  font-size: ${({ theme }) => theme.font.xxs};
  line-height: ${({ theme }) => theme.font.xs};
  padding: 4px 10px;
`;
const Markdown = ({ markdown }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: markdown }} />
);

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Markdown;
