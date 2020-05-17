import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const LinkWrapper = styled(Link)`
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
    font-weight: 700;
    background-color: transparent;
    &.active {
        color: ${({ theme }) => theme.color.brand[2]};
        &:hover {
            color: ${({ theme }) => theme.color.brand[0]} !important;
        }
    }
`;

const LinkEl = ({ children, href, to, ...props }) => {
    if (href) {
        return (
            <LinkWrapper as="a" href={href} {...props}>
                {children}
            </LinkWrapper>
        );
    }
    return (
        <LinkWrapper activeClassName="active" to={to} {...props}>
            {children}
        </LinkWrapper>
    );
};

LinkEl.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
};
LinkEl.defaultProps = {
    to: '',
    href: '',
};

export default LinkEl;
