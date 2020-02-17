/* eslint-disable no-shadow */
import React, { useContext, useRef, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TimelineLite } from 'gsap';
import { Context } from '../Context';

import { ButtonSC } from './Button';
import { setOrderByNewActive, elementsByOrder } from '../utils';
import { introAnimation, selectItemAnimation } from './gsapAnimations';

export const ButtonsWrapperSC = styled.div`
    position: absolute;
    display: flex;
    width: 100%;

    height: 60px;
    top: -65px;
    left: 0%;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 500px;
        height: 80px;
        top: -85px;
    }
    ${({ active }) => css`
        ${ButtonSC}:nth-child(${active + 1}){
            opacity:1;
        }`}
`;

export const ButtonsWrapper = ({ children, triggerInitAnimationDeps }) => {
    const { active } = useContext(Context);
    const wrapperRef = useRef({ children: [] });
    const [btnsOrder, setButtonsOrder] = useState([]);

    const generalTl = useMemo(() => new TimelineLite(), []);

    const buttons = elementsByOrder(
        [...wrapperRef.current.children],
        btnsOrder,
    );

    const selectNewActiveButton = newOrder => {
        const elementsByNewOrder = elementsByOrder(
            [...wrapperRef.current.children],
            newOrder,
        );

        generalTl.add(selectItemAnimation(elementsByNewOrder));
    };

    const introWithSelectActive = buttons =>
        generalTl.add(introAnimation(buttons));

    if (triggerInitAnimationDeps.length) {
        const [fn, deps] = triggerInitAnimationDeps;
        useEffect(
            fn(() => introWithSelectActive(buttons)),
            deps,
        );
    }

    useEffect(() => {
        const newOrder = setOrderByNewActive(btnsOrder, active);
        setButtonsOrder(newOrder);
        selectNewActiveButton(newOrder);
    }, [active]);

    useEffect(() => {
        setButtonsOrder(buttons.map((btn, i) => i));
        introWithSelectActive(buttons);
    }, [wrapperRef.current.children.length]);

    return (
        <ButtonsWrapperSC ref={wrapperRef} active={active}>
            {children}
        </ButtonsWrapperSC>
    );
};

ButtonsWrapper.propTypes = {
    children: PropTypes.node,
    triggerInitAnimationDeps: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};
ButtonsWrapper.defaultProps = {
    children: null,
    triggerInitAnimationDeps: [],
};
