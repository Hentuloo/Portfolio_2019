import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { WithMouseHover } from 'providers/WithMouseHover';

export const StyledLink = styled.a`
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
    background-color: ${({ theme }) => theme.color.brand[2]};
    cursor: none;
    transition: transform 0.3s ease-out;
    @media (max-width: ${({ theme }) => theme.breakPointMobile}) {
        transform: translate(0px, 0px) !important;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        background-color: transparent;
        ${({ active }) =>
            active &&
            css`
                color: ${({ theme }) => theme.color.brand[2]};
                &:hover {
                    color: ${({ theme }) => theme.color.brand[0]} !important;
                }
            `}
    }
`;

const Link = ({
    href,
    onClick,
    active,
    children,
    gsapDelay,
    attr,
    target,
    rel,
}) => {
    return (
        <WithMouseHover
            gsapDelay={gsapDelay || 0.4}
            attr={
                attr || {
                    sensitivity: 0.4,
                    x: -20,
                    y: -5,
                }
            }
            render={({ listeners }) => (
                <StyledLink
                    {...listeners}
                    rel={rel}
                    target={target}
                    href={href}
                    onClick={onClick}
                    active={active}
                >
                    {children}
                </StyledLink>
            )}
        />
    );
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    gsapDelay: PropTypes.oneOfType([() => null, PropTypes.object]),
    attr: PropTypes.oneOfType([() => null, PropTypes.object]),
    target: PropTypes.string,
    rel: PropTypes.string,
};
Link.defaultProps = {
    onClick: null,
    active: false,
    gsapDelay: null,
    attr: null,
    target: '',
    rel: '',
};

export default memo(Link, (prev, next) => prev.active === next.active);
