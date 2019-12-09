import styled from 'styled-components';

const Square = styled.div`
    width: 100vw;
    height: 120vh;
    position: fixed;
    bottom: 0%;
    left: 20vw;
    transform-origin: left bottom;
    transform: rotate(22deg);
    /* transform: translate(-47%, -84%) rotate(26deg); */
    background-color: ${({ theme }) => theme.grayFirst};
    z-index: -10;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 500px;
        height: 200vh;
        left: 27vw;
        transform: rotate(41deg);
        pointer-events: none;
    }
`;

export default Square;
