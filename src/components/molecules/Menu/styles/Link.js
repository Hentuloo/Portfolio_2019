import styled from 'styled-components';

const Link = styled.a`
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
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        background-color: transparent;
    }
`;
export default Link;
