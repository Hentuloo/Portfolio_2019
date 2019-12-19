import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useMouseEffects } from 'hooks/useMouseEffects';

const atomAnimation = keyframes`
to{
    transform: rotate(360deg);
}
`;

const Wrapper = styled.div`
    display: none;
    position: fixed;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    pointer-events: none;
    overflow: hidden;
    pointer-events: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: block;
    }
`;

const CursorCircle = styled.div`
    position: absolute;
    width: 32px;
    height: 32px;
    border: 2px solid white;
    border-radius: 50%;
    transition: transform 0.9s ease-out;
    box-sizing: border-box;
    &::after {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        left: -13px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.redThird};
        transform-origin: 26px 50%;
        transform: rotate(0deg);
        animation: ${atomAnimation} 3s infinite forwards
            cubic-bezier(0.98, 0.43, 0.67, 0.81);
    }
`;

const CursorPoint = styled.div`
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.redFirst};
    transition: transform 0.1s ease-out;
    transform-origin: 100% 50%;
`;

const Cursor = () => {
    const { getMove } = useMouseEffects();

    return (
        <Wrapper>
            <CursorPoint {...getMove({ x: '-3px', y: '-3px' })} />
            <CursorCircle {...getMove({ x: '-16px', y: '-16px' })} />
            {/* <CursorPoint
                style={{ transform: `translate(${x - 3}px, ${y - 3}px)` }}
            />
            <CursorCircle
                style={{ transform: `translate(${x - 16}px, ${y - 16}px)` }}
            /> */}
        </Wrapper>
    );
};

export default Cursor;
