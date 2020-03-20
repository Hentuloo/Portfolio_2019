import React, { useMemo, useContext } from 'react';
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

export const Wrapper = ({ children }) => {
    const { changeActive, rerenderDeps, buttonsClass } = useContext(Context);

    const [buttons, sections] = useMemo(
        () =>
            separatedChildrenWithButtonEvent(
                children,
                changeActive,
                buttonsClass,
            ),
        [rerenderDeps],
    );

    return (
        <OutWrapperSC>
            <WrapperSC>
                <ButtonsWrapper>{buttons}</ButtonsWrapper>
                <SectionsWrapper>{sections}</SectionsWrapper>
                <CirclesImageWrapper type="presentation">
                    <Image src={circlesRightBottom} />
                </CirclesImageWrapper>
            </WrapperSC>
        </OutWrapperSC>
    );
};
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
