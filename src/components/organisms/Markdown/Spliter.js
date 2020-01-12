import React from 'react';

import SentenceInArray from './components/SentenceInArray';
import Sentence from './components/Sentence';
import Dash from './components/Dash';
import Comma from './components/Comma';
import Moustache from './components/Moustache';
import SingleChar from './components/SingleChar';

const Spliter = ({ children, current }) => {
    const markdownAfterRegEX = children.match(
        /[[\]]|[|{|}|,|;|:|\s]+|(['][^']+['$])|(["][^"]+["$])|([`][^`]+[`$])/gm,
    );

    let groupCount = 0;
    let dashLiteral = 0;
    let groupFlag = false;

    const Elements = markdownAfterRegEX.map((chars, index) => {
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
    return Elements;
};

export default Spliter;
