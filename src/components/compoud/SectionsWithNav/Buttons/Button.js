import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Context } from '../Context';

export const ButtonSC = styled.button`
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    border: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 80px;
        height: 80px;
    }
`;

export const Button = ({ children, render, ...props }) => {
    const { active, prevActive } = useContext(Context);
    if (render) {
        return (
            <ButtonSC type="button" {...props}>
                {render({ active, prevActive })}
            </ButtonSC>
        );
    }
    return (
        <ButtonSC type="button" {...props}>
            {children}
        </ButtonSC>
    );
};
Button.propTypes = {
    render: PropTypes.func,
    children: PropTypes.node,
};
Button.defaultProps = {
    render: null,
    children: null,
};
