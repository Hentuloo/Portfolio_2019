import styled from 'styled-components';

export const SectionSC = styled.section`
    position: absolute;
    width: 100%;
    left: 0%;
    top: auto;
    display: grid;
    opacity: 0;
    overflow: hidden;
    padding: 60px 40px 0px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        padding: 30px 50px 0px 20px;
    }
`;
