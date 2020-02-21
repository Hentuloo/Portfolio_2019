import React, { useReducer, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Context } from './Context';

import circlesRightBottom from './assets/circlesRightBottom.svg';

import { SectionsWrapper } from './SectionsWrapper';
import { ButtonsWrapper } from './Buttons';

import { separatedChildrenWithButtonEvent } from './utils';

export const OutWrapperSC = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const WrapperSC = styled.div`
    position: relative;
    display: grid;
    width: 90%;
    min-height: 400px;
    margin: 70px auto 0px;
    padding: 22px 15px 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.white[0]};
    z-index: 1;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        margin: 90px auto 0px;
        padding: 52px 15px 10px;
    }
`;

export const CirclesImageWrapper = styled.div`
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

export const Wrapper = ({
    children,
    triggerInitAnimationDeps,
    updateTrigger,
}) => {
    const [throttledButtons, setThrottledButtons] = useState(null);
    const [{ prevActive, active }, setNewActive] = useReducer(
        (prevS, newActive) => ({
            prevActive: prevS.active,
            active: newActive,
        }),
        {
            prevActive: null,
            active: 0,
        },
    );

    const handleChangeActive = newActive => {
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
    const [buttons, sections] = useMemo(
        () => separatedChildrenWithButtonEvent(children, handleChangeActive),
        [updateTrigger],
    );

    return (
        <Context.Provider value={contextValue}>
            <OutWrapperSC>
                <WrapperSC>
                    <ButtonsWrapper
                        triggerInitAnimationDeps={triggerInitAnimationDeps}
                    >
                        {buttons}
                    </ButtonsWrapper>
                    <SectionsWrapper>{sections}</SectionsWrapper>
                    <CirclesImageWrapper type="presentation">
                        <Image src={circlesRightBottom} />
                    </CirclesImageWrapper>
                </WrapperSC>
            </OutWrapperSC>
        </Context.Provider>
    );
};
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    updateTrigger: PropTypes.any,
    triggerInitAnimationDeps: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};
Wrapper.defaultProps = {
    updateTrigger: null,
    triggerInitAnimationDeps: [],
};
