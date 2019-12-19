import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useMouseMood } from 'hooks/useMouseMood';
import Link from './styles/Link';

const Wrapper = styled.li`
    &:hover {
        ${Link} {
            color: white;
        }
    }

    &:last-of-type {
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            display: flex !important;
        }
        ${Link} {
            display: flex;
            justify-content: flex-end;

            &:nth-of-type(2) {
                justify-content: flex-start;
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
