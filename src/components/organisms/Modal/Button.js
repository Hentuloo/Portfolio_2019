import styled from 'styled-components';

export const Button = styled.div`
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    border: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 80px;
        height: 80px;
    }
`;
