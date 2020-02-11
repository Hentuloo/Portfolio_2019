import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
    display: flex;
    height: 100%;
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.s};
    font-family: ${({ theme }) => theme.font.first};
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.color.black[0]};
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-wrap: wrap;
        font-family: ${({ theme }) => theme.font.second};
    }
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
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
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
    }
    /* 
  
   
     
    } */
`;

const List = ({ children, className }) => {
    return <Wrapper className={className}>{children}</Wrapper>;
};

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
List.defaultProps = {
    className: '',
};

export default List;
