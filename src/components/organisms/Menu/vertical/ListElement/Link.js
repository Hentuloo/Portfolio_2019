import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const LinkWrapper = styled.a`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    justify-items: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black[0]};
    z-index: 15;
    cursor: none;
    font-weight: 600;
    background-color: transparent;
    ${({ active }) =>
        active &&
        css`
            color: ${({ theme }) => theme.color.brand[2]};
            &:hover {
                color: ${({ theme }) => theme.color.brand[0]} !important;
            }
        `}
`;

const Link = ({ children, ...props }) => {
    return <LinkWrapper {...props}>{children}</LinkWrapper>;
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
};

export default memo(Link, (prev, next) => prev.active === next.active);
