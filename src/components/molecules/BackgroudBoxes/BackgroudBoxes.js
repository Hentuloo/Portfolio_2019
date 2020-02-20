import React from 'react';
import styled from 'styled-components';

const RightBox = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.color.brand[0]};
    width: 120px;
    height: 160px;
    right: 0%;
    top: 0%;
    z-index: -2;
    will-change: transform;
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

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 150px;
        height: 190px;
        left: 240px;
        top: -75px;
        transform: rotate(-25deg);
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

const BackgroudBoxes = () => {
    return (
        <div>
            <LeftBox />
            <RightBox />
            <StaticGrayBlock />
        </div>
    );
};

export default BackgroudBoxes;
