import { css } from 'styled-components';

const ShadowPharse = css`
    position: fixed;
    display: grid;
    width: 100vw;
    height: 100vh;
    bottom: 0%;
    left: 0%;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    line-height: 150px;
    letter-spacing: 7px;
    text-align: center;
    font-size: 35vw;
    color: white;
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        padding-top: 140px;
        padding-right: 100px;
        font-size: 25rem;
    }
`;

export default ShadowPharse;
