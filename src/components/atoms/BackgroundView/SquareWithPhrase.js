import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Centered } from './Centered';

export const SquareWrapper = styled.div`
    width: 100vw;
    height: 120vh;
    position: fixed;
    bottom: 0%;
    left: 20vw;
    transform-origin: left bottom;
    transform: rotate(22deg);
    /* transform: translate(-47%, -84%) rotate(26deg); */
    background-color: ${({ theme }) => theme.grayFirst};
    z-index: -10;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 500px;
        height: 200vh;
        left: 27vw;
        transform: rotate(41deg);
        pointer-events: none;
    }
`;

export const SquareCenterContent = styled.div`
    ${Centered};
    transform-origin: left bottom;
    transform: rotate(-22deg) translate(-20vw, calc(0vh));
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        transform: rotate(-41deg) translate(-27vw, calc(0vh));
    }
`;
export const SquareItem = styled.div``;

const Square = ({ children }) => {
    return (
        <SquareWrapper>
            <SquareCenterContent>{children}</SquareCenterContent>
        </SquareWrapper>
    );
};

Square.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Square;
