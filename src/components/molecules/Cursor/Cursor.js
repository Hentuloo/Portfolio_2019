import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { useSelector } from 'react-redux';
import { WithMouseMove } from 'providers/WithMouseMove';

const atomAnimation = keyframes`
to{
    transform: rotate(360deg);
}
`;
const pulse = keyframes`
to{
    transform: scale(0.16);
    opacity: 0.4;
}
`;

const Wrapper = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    display: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: block;
        ${({ black }) =>
            black &&
            css`
                z-index: -1;
            `}
    }
`;

const CursorCircle = styled.div`
    position: absolute;
    width: 32px;
    height: 32px;
    left: -16px;
    top: -16px;
    border: 2px solid white;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: none;
    pointer-events: none;
    ${({ black }) =>
        black &&
        css`
            border: 2px solid transparent;
        `}
    ${({ focus }) =>
        focus &&
        css`
            width: 50px;
            height: 50px;
            left: -25px;
            top: -25px;
            border: 1px solid ${({ theme }) => theme.grayFirst};
        `}

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
        ${({ focus }) =>
            focus &&
            css`
                transform-origin: 36px 50%;
                background-color: black;
            `}
    }
`;

const CursorPoint = styled.div`
    position: absolute;
    width: 6px;
    height: 6px;
    left: -3px;
    top: -3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.redFirst};

    ${({ focus }) =>
        focus &&
        css`
            background-color: transparent;
        `}
    ${({ black }) =>
        black &&
        css`
            z-index: -22;
        `}

    &::before {
        content: '';
        position: fixed;
        width: 120px;
        height: 120px;
        left: -60px;
        top: -60px;
        border-radius: 50%;
        background-color: black;
        transform: scale(0.2);
        transition: transform 0.3s linear;
        opacity: 0;
        ${({ black }) =>
            black &&
            css`
                transform: scale(1);
                opacity: 1;
            `}
        ${({ focus }) =>
            focus &&
            css`
                left: -57px;
                top: -58px;
                transform: scale(0.03);
                background-color: ${({ theme }) => theme.redFirst};
                animation: ${pulse} 1s infinite forwards alternate
                    cubic-bezier(0.98, 0.43, 0.67, 0.81);
                opacity: 1;
            `}
    }
`;

const Cursor = () => {
    const mood = useSelector(({ cursor }) => cursor);
    const isBlackMode = mood === 'black';
    const isFocusMode = mood === 'focus';
    return (
        <Wrapper black={isBlackMode}>
            <WithMouseMove
                gsapDelay={0.3}
                render={() => (
                    <CursorPoint focus={isFocusMode} black={isBlackMode} />
                )}
            />
            <WithMouseMove
                gsapDelay={1.6}
                render={() => (
                    <CursorCircle focus={isFocusMode} black={isBlackMode} />
                )}
            />
        </Wrapper>
    );
};

export default Cursor;
