import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';

const RightBox = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.color.brand[0]};
    width: 120px;
    height: 160px;
    right: 0%;
    top: 0%;
    z-index: -2;
    will-change: transform;
    transform: translate(0%, -100%);
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 160px;
        height: 210px;
    }
`;

const LeftBox = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.color.brand[1]};
    width: 80px;
    height: 180px;
    left: 0%;
    top: 0%;
    z-index: -2;
    will-change: transform;
    transform: translate(0%, -100%);

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 150px;
        height: 190px;
        left: 320px;
        top: -75px;
        transform: rotate(-25deg) translate(0%, -100%);
    }
`;
const StaticGrayBlock = styled.div`
    display: none;
    position: fixed;
    width: 500px;
    height: 1000px;
    top: -74px;
    right: 88px;
    background-color: ${({ theme }) => theme.color.gray[3]};
    transform-origin: left bottom;
    transform: rotate(35deg) translate(29%, 13%);
    z-index: -2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: block;
    }
`;

const BackgroudBoxes = ({ showAll, contentLoaded }) => {
    const leftBox = useRef(null);
    const rightBox = useRef(null);

    const showBoxes = useCallback(
        (opts = {}) => {
            const left = leftBox.current;
            const right = rightBox.current;
            if (!right || !left) return;
            return gsap.to([right, left], { delay: 0.1, y: 0, ...opts });
        },
        [leftBox, rightBox],
    );
    const hideBoxes = useCallback(
        (opts = {}) => {
            const left = leftBox.current;
            const right = rightBox.current;
            if (!right || !left) return;
            return gsap.to([right, left], { delay: 0.1, y: '-=100%', ...opts });
        },
        [leftBox.current, rightBox.current],
    );

    useEffect(() => {
        if (!contentLoaded) return;
        if (showAll) {
            showBoxes();
        } else {
            hideBoxes();
        }
    }, [showAll]);

    useEffect(() => {
        if (contentLoaded) {
            showBoxes({ delay: 1.5 });
        }
    }, [contentLoaded]);

    return (
        <div>
            <LeftBox ref={leftBox} />
            <RightBox ref={rightBox} />
            <StaticGrayBlock />
        </div>
    );
};

export default BackgroudBoxes;

BackgroudBoxes.propTypes = {
    showAll: PropTypes.bool.isRequired,
    contentLoaded: PropTypes.bool.isRequired,
};
