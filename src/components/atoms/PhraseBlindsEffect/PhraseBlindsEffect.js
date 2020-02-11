import styled, { keyframes, css } from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

const blinds = keyframes`
100%{
 transform: scaleX(0);
}
`;

export const HeaderName = styled(Paragraph)`
    position: fixed;
    top: 0%;
    left: 0%;
    display: flex;
    flex-direction: column;
    margin: 5% 2%;
    font-size: ${({ theme }) => theme.font.l};
    line-height: ${({ theme }) => theme.font.l};
    font-family: ${({ theme }) => theme.font.second};
    font-weight: ${({ theme }) => theme.font.bold};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        left: 204px;
        margin: 2% 6%;
        line-height: ${({ theme }) => theme.font.xxl};
        font-size: ${({ theme }) => theme.font.xl};
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        font-size: ${({ theme }) => theme.font.xxxl};
        line-height: ${({ theme }) => theme.font.xxxl};
    }

    &::after,
    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0%;
        left: 0%;
        background-color: ${({ theme }) => theme.color.brand[0]};
        transform-origin: right 50%;
        animation: ${blinds} 0.8s 0.9s ${({ theme }) => theme.blindsAnimation}
            forwards;
    }
    &::before {
        left: 50%;
        background-color: ${({ theme }) => theme.color.brand[2]};
        animation: ${blinds} 0.8s 1.1s ${({ theme }) => theme.blindsAnimation}
            forwards;
    }
    /* RESET */
    ${({ gray }) =>
        gray &&
        css`
            &::after,
            &::before {
                width: 100%;
                top: 0%;
                left: 0%;
                animation: none;
                content: normal;
            }
        `}

    ${({ gray }) =>
        gray &&
        css`
            &::after {
                content: '';
                background-color: ${({ theme }) => theme.color.gray[0]};
                animation: ${blinds} 0.8s 0s
                    ${({ theme }) => theme.blindsAnimation} forwards;
            }
        `}
`;

export default HeaderName;
