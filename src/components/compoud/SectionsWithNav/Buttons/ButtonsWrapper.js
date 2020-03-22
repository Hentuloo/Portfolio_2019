/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Context } from '../Context';

import { ButtonSC } from './Button';

export const ButtonsWrapperSC = styled.div`
    position: absolute;
    display: flex;
    width: 100%;

    height: 60px;
    top: -65px;
    left: 0%;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 500px;
        height: 80px;
        top: -85px;
    }
    ${({ active }) => css`
        ${ButtonSC}:nth-child(${active + 1}){
            opacity:1;
        }`}
`;

export const ButtonsWrapper = ({ children }) => {
    const { active } = useContext(Context);

    return <ButtonsWrapperSC active={active}>{children}</ButtonsWrapperSC>;
};

ButtonsWrapper.propTypes = {
    children: PropTypes.node,
};
ButtonsWrapper.defaultProps = {
    children: null,
};
