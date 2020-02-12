import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
    position: relative;
    font-family: ${({ theme }) => theme.font.second};
    margin: 0px;
    font-weight: 300;
    line-height: 114%;
    font-size: ${({ theme }) => theme.font.s};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        font-size: ${({ theme }) => theme.font.xs};
    }

    &::after {
        display: none;
        position: absolute;
        content: '';
        width: 60%;
        height: 2px;
        bottom: -6px;
        left: 0%;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.color.gray[1]};
        ${({ underline }) =>
            underline &&
            css`
                display: block;
            `}
    }

    ${({ asTitle }) =>
        asTitle &&
        css`
            text-transform: uppercase;
            font-weight: 500;
            font-size: ${({ theme }) => theme.font.m};
            margin-bottom: 20px;
        `}
    ${({ red }) =>
        red &&
        css`
            font-weight: 500;
            color: ${({ theme }) => theme.color.brand[0]};
        `}
`;

export const ParagraphTitle = styled.p`
    position: relative;
    font-family: ${({ theme }) => theme.font.second};
    margin: 0px;
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 114%;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.m};
    color: ${({ theme }) => theme.color.brand[0]};
    &::after {
        position: absolute;
        content: '';
        width: 60%;
        height: 2px;
        bottom: -6px;
        left: 0%;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.color.gray[1]};
    }
`;
