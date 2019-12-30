import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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

const Markdown = ({ markdown }) => {
    const { current } = useSelector(state => state.ActivePage);

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
                    currentPage={current}
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
                    currentPage={current}
                    key={index}
                    closedDashLiteral={dashLiteralHelper}
                >
                    {chars}
                </Dash>
            );
        }
        if (chars.includes('{') || chars.includes('}')) {
            return (
                <Moustache currentPage={current} key={index}>
                    {chars}
                </Moustache>
            );
        }
        if (chars.includes(`'`) || chars.includes('`')) {
            return (
                <Sentence currentPage={current} key={index}>
                    {chars}
                </Sentence>
            );
        }
        if (chars.includes('"')) {
            return (
                <SentenceInArray
                    currentPage={current}
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
                    currentPage={current}
                    dashLiteral={dashLiteral}
                    key={index}
                >
                    {chars}
                </Comma>
            );
        }
        if (chars.includes(';') || chars.includes(':')) {
            return (
                <SingleChar currentPage={current} key={index}>
                    {chars}
                </SingleChar>
            );
        }
        return chars;
    });

    // console.log(array);
    return <Wrapper currentPage={current}>{array}</Wrapper>;
};

Markdown.propTypes = {
    markdown: PropTypes.string.isRequired,
};

export default Markdown;
