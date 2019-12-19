import styled, { css } from 'styled-components';

const Link = styled.a`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    justify-items: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    z-index: 15;
    background-color: ${({ theme }) => theme.redThird};
    cursor: none;
    transition: transform 0.3s ease-out;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        background-color: transparent;
        ${({ active }) =>
            active &&
            css`
                color: ${({ theme }) => theme.redThird};
                &:hover {
                    color: ${({ theme }) => theme.redFirst} !important;
                }
            `}
    }
`;
export default Link;
