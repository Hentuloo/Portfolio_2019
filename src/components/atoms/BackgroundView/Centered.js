import { css } from 'styled-components';

export const Centered = css`
    position: fixed;
    display: grid;
    width: 100vw;
    height: 100vh;
    top: 0%;
    right: 0%;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    line-height: 150px;
    letter-spacing: 7px;
    text-align: center;
    font-size: 35vw;
    color: white;
    z-index: -12;
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        padding-top: 140px;
        padding-right: 100px;
        font-size: 25rem;
    }
`;
