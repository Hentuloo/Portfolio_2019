import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TimelineLite } from 'gsap';
import Context from './Context';

import { ButtonSC } from './Button';

export const ButtonsWrapperSC = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 60px;
    top: -65px;
    left: 0%;
    z-index: 2;
    ${({ active }) => css`
        ${ButtonSC}:nth-child(${active + 1}){
            opacity:1;
        }`}
`;

export const ButtonsWrapper = ({ children }) => {
    const { active } = useContext(Context);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const tl = new TimelineLite();
        const btnsNodes = wrapperRef.current.children;
        // const active = btnsNodes
        console.log(btnsNodes);

        tl.staggerTo(
            btnsNodes,
            0.6,
            {
                x: (i, t) => -(t.offsetWidth * i + i * 5),
                delay: 4.1,
            },
            0.1,
        );
    }, []);

    return (
        <ButtonsWrapperSC ref={wrapperRef} active={active}>
            {children}
        </ButtonsWrapperSC>
    );
};

ButtonsWrapper.propTypes = {
    children: PropTypes.node,
};
ButtonsWrapper.defaultProps = {
    children: null,
};
