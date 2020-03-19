import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.s};
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.color.black[0]};
    font-family: ${({ theme }) => theme.font.second};

    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        font-size: ${({ theme }) => theme.font.medium};
    }
    li {
        position: relative;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        box-sizing: border-box;
        &::after,
        &::before {
            display: none;
            position: absolute;
            content: '';
            width: 60%;
            height: 5px;
            top: 0%;
            left: 0%;
            border-radius: 25%;
            background-color: black;
        }
        &::before {
            display: block;
        }
        &:last-of-type {
            &::after {
                display: block;
                top: auto;
                bottom: 0%;
            }
        }
    }
`;

const List = forwardRef(({ children, className, ...props }, ref) => {
    return (
        <Wrapper ref={ref} className={className} {...props}>
            {children}
        </Wrapper>
    );
});

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
List.defaultProps = {
    className: '',
};

export default List;
