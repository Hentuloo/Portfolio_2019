import React from 'react';
import styled, { keyframes } from 'styled-components';

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
        animation: ${blinds} 1.5s 1.9s ${({ theme }) => theme.blindsAnimation}
            forwards;
    }
    div:nth-of-type(1) {
        display: block;
        background-color: ${({ theme }) => theme.redThird};
        animation-delay: 1.9s;
    }
    div:nth-of-type(2) {
        display: block;
        background-color: ${({ theme }) => theme.grayThird};
        animation-delay: 1.95s;
    }
    div:nth-of-type(3) {
        display: block;
        background-color: ${({ theme }) => theme.grayDark};
        animation-delay: 2s;
    }
    div:nth-of-type(4) {
        display: block;
        background-color: ${({ theme }) => theme.redFirst};
        animation-delay: 2.05s;
    }
`;

const GridBlocksAnimation = () => {
    return (
        <Wrapper>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </Wrapper>
    );
};

export default GridBlocksAnimation;
