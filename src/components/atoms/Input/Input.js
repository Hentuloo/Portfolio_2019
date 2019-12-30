import styled, { css } from 'styled-components';

export const general = css`
    width: 100%;
    height: 8vh;
    min-height: 40px;
    padding: 10px 10px 6px;
    border: none;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.font.m};
    font-family: ${({ theme }) => theme.font.first};
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        padding: 10px 10px;
    }
    &:focus {
        outline: none;
        transform: scale(1.04);
        box-shadow: 0px 15px 29px -3px rgba(0, 0, 0, 0.75);
    }
    &:disabled {
        background-color: transparent;
        border: 1px solid black;
        opacity: 0.4;
    }
    &::placeholder {
        color: black;
        text-transform: uppercase;
    }
`;

export const Input = styled.input`
    ${general}
`;
