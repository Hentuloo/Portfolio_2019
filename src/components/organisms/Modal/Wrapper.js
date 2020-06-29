import styled from 'styled-components';

export const Wrapper = styled.section`
    position: relative;
    width: 90%;
    height: 100%;
    display: grid;
    min-height: 360px;
    margin: 70px auto 0px;
    padding: 22px 15px 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.white[0]};
    z-index: 1;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        margin: 90px auto 0px;
        padding: 52px 15px 10px;
    }
`;
