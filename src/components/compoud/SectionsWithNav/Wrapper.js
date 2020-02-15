import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Context from './Context';

import circlesRightBottom from './assets/circlesRightBottom.svg';

import { SectionsWrapper } from './SectionsWrapper';
import { ButtonsWrapper } from './Buttons';

import { separatedChildrenWithButtonEvent } from './utils';

const WrapperSC = styled.div`
    position: relative;
    display: grid;
    width: 90%;
    min-height: 400px;
    margin: 70px auto 0px;
    padding: 22px 15px 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.white[0]};
    box-shadow: 0px 3px 48px rgba(0, 0, 0, 0.35);
    z-index: 1;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        margin: 90px auto 0px;
        padding: 42px 15px 10px;
    }
`;

const CirclesImageWrapper = styled.div`
    position: absolute;
    width: 213px;
    height: 174px;
    right: 0%;
    bottom: 0px;
    z-index: -1;
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const Wrapper = ({ children }) => {
    const [throttledButtons, setThrottledButtons] = useState(null);
    const [{ prevActive, active }, setNewActive] = useReducer(
        (prevS, newActive) => ({ prevActive: prevS.active, active: newActive }),
        {
            prevActive: null,
            active: 0,
        },
    );

    const handleChangeActive = newActive => {
        if (newActive === active) return null;
        if (throttledButtons === null) {
            setNewActive(newActive);
            const timeoutId = setTimeout(() => {
                setThrottledButtons(null);
            }, 800);
            setThrottledButtons(timeoutId);
        }
        return null;
    };

    const contextValue = {
        active,
        prevActive,
    };

    const [buttons, sections] = separatedChildrenWithButtonEvent(
        children,
        handleChangeActive,
    );

    return (
        <Context.Provider value={contextValue}>
            <WrapperSC>
                <ButtonsWrapper>{buttons}</ButtonsWrapper>
                <SectionsWrapper>{sections}</SectionsWrapper>
                <CirclesImageWrapper type="presentation">
                    <Image src={circlesRightBottom} />
                </CirclesImageWrapper>
            </WrapperSC>
        </Context.Provider>
    );
};
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
