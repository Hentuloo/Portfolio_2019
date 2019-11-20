import styled, { keyframes } from 'styled-components';

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
    word-spacing: 50px;
    font-size: ${({ theme }) => theme.font.l};
    line-height: ${({ theme }) => theme.font.l};
    font-family: 'Baloo Tamma';
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
        background-color: ${({ theme }) => theme.redFirst};
        transform-origin: right 50%;
        animation: ${blinds} 0.8s 0.5s cubic-bezier(0.97, 0.16, 0.31, 0.67)
            forwards;
    }
    &::before {
        left: 50%;
        background-color: ${({ theme }) => theme.redThird};
        animation: ${blinds} 0.8s 0.65s cubic-bezier(0.97, 0.16, 0.31, 0.67)
            forwards;
    }
`;

export default HeaderName;
