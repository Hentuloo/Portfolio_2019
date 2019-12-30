import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useMouseMood } from 'hooks/useMouseMood';
import Link from './styles/Link';

const Wrapper = styled.li`
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    &:hover {
        ${Link} {
            color: white;
        }
    }

    &:last-of-type {
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            div {
                width: 100%;
                height: 100%;
                display: grid !important;
                grid-auto-flow: column;
                gap: 10px;
            }
        }
        ${Link} {
            display: flex;
            justify-content: flex-end;
            margin-right: 30px;
            &:nth-of-type(2) {
                justify-content: flex-start;
                margin-right: 0px;
            }
            &:hover span {
                text-decoration: underline;
            }
        }

        span {
            padding-top: 9px;
            font-size: ${({ theme }) => theme.font.mini};
        }
    }

    ${({ hideMobile }) =>
        hideMobile &&
        css`
            display: none !important;
            @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                display: grid !important;
            }
        `}
`;

const ListElement = ({ children, hideMobile }) => {
    const { toggleMoodOnHover } = useMouseMood();
    return (
        <Wrapper
            hideMobile={hideMobile}
            {...toggleMoodOnHover({
                initialMood: 'normal',
                mood: 'black',
            })}
        >
            {children}
        </Wrapper>
    );
};

ListElement.propTypes = {
    children: PropTypes.node.isRequired,
    hideMobile: PropTypes.bool,
};
ListElement.defaultProps = {
    hideMobile: false,
};

export default ListElement;
