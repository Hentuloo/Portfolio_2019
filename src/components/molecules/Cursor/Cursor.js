import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useSelector } from 'react-redux';

import { TweenLite, Power1 } from 'gsap';

const Wrapper = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    display: none;
    mix-blend-mode: difference;
    pointer-events: none;
    z-index: 20;
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
`;

const CursorPoint = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    left: -4px;
    top: -4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.brand[0]};

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
    }
`;

const Cursor = () => {
    const mood = useSelector(({ cursor }) => cursor);
    const isBlackMode = mood === 'black';
    const isFocusMode = mood === 'focus';

    const wrapperRef = useRef(null);

    useEffect(() => {
        const [small, big] = [...wrapperRef.current.childNodes];
        const mouseMove = ({ clientX, clientY }) => {
            TweenLite.to(small, 0.3, {
                x: clientX,
                y: clientY,
                ease: Power1.ease,
                force3D: false,
            });
            TweenLite.to(big, 0.9, {
                x: clientX,
                y: clientY,
                force3D: false,
                ease: Power1.ease,
            });
        };
        if (window.innerWidth >= 755) {
            document.addEventListener('mousemove', mouseMove);
        }
        return () => {
            document.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <Wrapper black={isBlackMode} ref={wrapperRef}>
            <CursorPoint focus={isFocusMode} black={isBlackMode} />
            <CursorCircle focus={isFocusMode} black={isBlackMode} />
        </Wrapper>
    );
};

export default Cursor;
