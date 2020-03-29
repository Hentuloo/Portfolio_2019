import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 60px;
    top: -65px;
    left: 0%;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 500px;
        height: 80px;
        top: -85px;
    }
`;
