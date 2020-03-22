import React, { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';

import { startGridAnimation, endGridAnimation } from './anim';

export * from './anim';

const Wrapper = styled.div`
    position: fixed;
    display: grid;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 27% 23% 20% 30%;
    grid-template-rows: 1fr;
    z-index: 30;

    pointer-events: none;
    div {
        height: 100%;
        transform-origin: left 50%;
        transform: scaleX(0);
    }
    div:nth-of-type(1) {
        display: block;
        background-color: ${({ theme }) => theme.color.brand[2]};
    }
    div:nth-of-type(2) {
        display: block;
        background-color: ${({ theme }) => theme.color.gray[2]};
    }
    div:nth-of-type(3) {
        display: block;
        background-color: ${({ theme }) => theme.color.gray[3]};
    }
    div:nth-of-type(4) {
        display: block;
        background-color: ${({ theme }) => theme.color.brand[0]};
    }
`;

export const GridBlocksAnimation = forwardRef(
    ({ withAnimation }, wrapperRef) => {
        useEffect(() => {
            if (withAnimation) {
                const boxes = wrapperRef.current.childNodes;

                const tl = gsap.timeline();
                tl.add(startGridAnimation(boxes)).add(endGridAnimation(boxes));
            }
        }, []);

        return (
            <Wrapper ref={wrapperRef}>
                <div />
                <div />
                <div />
                <div />
            </Wrapper>
        );
    },
);

GridBlocksAnimation.propTypes = {
    withAnimation: PropTypes.bool,
};
GridBlocksAnimation.defaultProps = {
    withAnimation: false,
};
