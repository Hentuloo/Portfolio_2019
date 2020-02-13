import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ButtonSC = styled.button`
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    border: none;

    left: calc(100% - 60px);
    bottom: 0%;
`;

export const Button = ({ children, ...props }) => {
    return (
        <ButtonSC type="button" {...props}>
            {children}
        </ButtonSC>
    );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
};