import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Centered } from './Centered';

export const SquareWrapper = styled.div`
    width: 140px;
    height: 140vh;
    position: fixed;
    top: 0%;
    right: 0px;
    transform-origin: right top;
    transform: rotate(30deg);
    /* transform: translate(-47%, -84%) rotate(26deg); */
    background-color: ${({ theme }) => theme.color.gray[0]};
    z-index: -10;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 220px;
        height: 200vh;
        right: -130px;
        transform: rotate(35deg);
        pointer-events: none;
    }
`;

export const SquareCenterContent = styled.div`
    ${Centered};
    transform-origin: top right;
    transform: rotate(-30deg);
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        transform: rotate(-35deg) translateX(-130px);
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
