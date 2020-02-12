import styled, { keyframes, css } from 'styled-components';

const blinds = keyframes`
100%{
 transform: scaleX(0);
}
`;

export const HeaderName = styled.p`
    position: fixed;
    top: 10px;
    left: 15px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.l};
    line-height: ${({ theme }) => theme.font.l};
    font-family: ${({ theme }) => theme.font.second};
    font-weight: ${({ theme }) => theme.font.bold};
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        left: 260px;
        top: 35px;
        line-height: ${({ theme }) => theme.font.xxl};
        font-size: ${({ theme }) => theme.font.xxl};
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
