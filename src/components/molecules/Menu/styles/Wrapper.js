import styled from 'styled-components';

const Wrapper = styled.nav`
    position: relative;
    position: fixed;
    width: 100vw;
    height: 63px;
    bottom: 0%;
    left: 0%;
    z-index: 14;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 160px;
        height: 83vh;
        bottom: auto;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 9px;
    }
`;

export default Wrapper;
