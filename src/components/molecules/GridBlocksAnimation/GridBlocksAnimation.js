import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Power2 } from 'gsap';

const blinds = keyframes`
0%{
    transform: scaleX(0);
}
40%{
    transform: scaleX(1);
}
60%{
    transform-origin: right 50%;
    transform: scaleX(1);
}
100%{
    transform-origin: right 50%;
    transform: scaleX(0);
}
`;

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
        display: none;
        height: 100%;
        transform-origin: left 50%;
        transform: scaleX(0);
        /* animation: ${blinds} 1.5s 2.3s ${({ theme }) =>
    theme.blindsAnimation}
            forwards; */
    }
    div:nth-of-type(1) {
        display: block;
        background-color: ${({ theme }) => theme.color.brand[2]};
        animation-delay: 2.3s;
    }
    div:nth-of-type(2) {
        display: block;
        background-color: ${({ theme }) => theme.color.gray[2]};
        animation-delay: 2.35s;
    }
    div:nth-of-type(3) {
        display: block;
        background-color: ${({ theme }) => theme.color.gray[3]};
        animation-delay: 2.4s;
    }
    div:nth-of-type(4) {
        display: block;
        background-color: ${({ theme }) => theme.color.brand[0]};
        animation-delay: 2.45s;
    }
`;

const GridBlocksAnimation = ({ tl, startLabel, endLabel }) => {
    const wrapperRef = useRef();

    useEffect(() => {
        if (!tl) return;
        const boxes = wrapperRef.current.childNodes;

        if (startLabel) tl.addLabel(startLabel);

        tl.set(boxes, { scaleX: 0, transformOrigin: 'left 50%' });
        tl.staggerTo(boxes, 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.07)
            .to(boxes, 0, {
                transformOrigin: 'right 50%',
            })
            .staggerTo(
                boxes,
                0.6,
                { scaleX: 0, ease: Power2.easeInOut, delay: 0.2 },
                0.07,
            );

        if (endLabel) tl.addLabel(endLabel);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <div />
            <div />
            <div />
            <div />
        </Wrapper>
    );
};

GridBlocksAnimation.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    tl: PropTypes.any,
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
};
GridBlocksAnimation.defaultProps = {
    tl: null,
    startLabel: null,
    endLabel: null,
};

export default GridBlocksAnimation;
