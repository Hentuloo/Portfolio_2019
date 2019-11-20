import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Constants from 'config/Constants';

import SentenceInArray from './components/SentenceInArray';
import Sentence from './components/Sentence';
import Dash from './components/Dash';
import Comma from './components/Comma';
import Moustache from './components/Moustache';
import SingleChar from './components/SingleChar';

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
 
${({ pageType }) =>
    pageType === 'projects' &&
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

const Markdown = ({ markdown, pageContext: { currentPage }, langContext }) => {
    // find current page type
    const keys = Object.keys(Constants[langContext].PATHS);
    const pageType = keys.find(
        key => Constants[langContext].PATHS[key] === currentPage,
    );

    const markdownAfterRegEX = markdown.match(
        /[[\]]|[|{|}|,|;|:|\s]+|(['][^']+['$])|(["][^"]+["$])|([`][^`]+[`$])/gm,
    );

    let groupCount = 0;
    let dashLiteral = 0;
    let groupFlag = false;

    const array = markdownAfterRegEX.map((chars, index) => {
        if (`[`.includes(chars)) {
            dashLiteral += 1;
            if (!groupFlag) {
                groupFlag = true;
                groupCount += 1;
            }
            return (
                <Dash
                    pageType={pageType}
                    key={index}
                    openDashLiteral={dashLiteral}
                >
                    {chars}
                </Dash>
            );
        }
        if (`]`.includes(chars)) {
            groupFlag = false;
            const dashLiteralHelper = dashLiteral;
            dashLiteral -= 1;
            return (
                <Dash
                    pageType={pageType}
                    key={index}
                    closedDashLiteral={dashLiteralHelper}
                >
                    {chars}
                </Dash>
            );
        }
        if (chars.includes('{') || chars.includes('}')) {
            return (
                <Moustache pageType={pageType} key={index}>
                    {chars}
                </Moustache>
            );
        }
        if (chars.includes(`'`) || chars.includes('`')) {
            return (
                <Sentence pageType={pageType} key={index}>
                    {chars}
                </Sentence>
            );
        }
        if (chars.includes('"')) {
            return (
                <SentenceInArray
                    pageType={pageType}
                    groupID={groupCount}
                    key={index}
                >
                    {chars}
                </SentenceInArray>
            );
        }
        if (chars.includes(',')) {
            return (
                <Comma
                    pageType={pageType}
                    dashLiteral={dashLiteral}
                    key={index}
                >
                    {chars}
                </Comma>
            );
        }
        if (chars.includes(';') || chars.includes(':')) {
            return (
                <SingleChar pageType={pageType} key={index}>
                    {chars}
                </SingleChar>
            );
        }
        return chars;
    });

    // console.log(array);
    return <Wrapper pageType={pageType}>{array}</Wrapper>;
};

Markdown.propTypes = {
    markdown: PropTypes.string.isRequired,
    langContext: PropTypes.string.isRequired,
    pageContext: PropTypes.shape({
        previousPage: PropTypes.string.isRequired,
        currentPage: PropTypes.string.isRequired,
        onChangePage: PropTypes.oneOfType([PropTypes.func, () => null]),
    }).isRequired,
};

export default withContext(Markdown);
