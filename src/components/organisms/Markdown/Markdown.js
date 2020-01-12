import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Spliter from './Spliter';

const Wrapper = styled.div`
  position: relative;
  padding: 10px 6px;
  border-radius: 5px;
  line-height: ${({ theme }) => theme.font.m};
  background-color: ${({ theme }) => theme.markdownBGC};
  font-size: ${({ theme }) => theme.font.xs};
  font-family: ${({ theme }) => theme.font.second};
  z-index: 2;
  white-space: pre-wrap;
  overflow:hidden;
 
${({ currentPage }) =>
    currentPage === 'projects' &&
    css`
        text-align: center;
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            text-align: left;
        }
    `}

  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    white-space: pre-wrap;
    font-size: ${({ theme }) => theme.font.xs};
    line-height: ${({ theme }) => theme.font.m};
  }
  @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
    font-size: ${({ theme }) => theme.font.s};
    line-height: ${({ theme }) => theme.font.l};
  }
`;

const Markdown = ({ markdown, type }) => {
    return (
        <Wrapper currentPage={type}>
            <Spliter current={type}>{markdown}</Spliter>
        </Wrapper>
    );
};

Markdown.propTypes = {
    markdown: PropTypes.string.isRequired,
    type: PropTypes.string,
};
Markdown.defaultProps = {
    type: '',
};

export default memo(Markdown, (prev, next) => prev.markdown === next.markdown);
