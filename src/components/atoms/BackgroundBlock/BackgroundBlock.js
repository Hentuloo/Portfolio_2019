import styled from 'styled-components';
import shadowPharse from '../ShadowPharse/ShadowPharse';

const BackgroundBlock = styled.div`
    width: 100vw;
    height: 120vh;
    position: fixed;
    bottom: 0%;
    left: 20vw;
    transform-origin: left bottom;
    transform: rotate(22deg);
    /* transform: translate(-47%, -84%) rotate(26deg); */
    background-color: ${({ theme }) => theme.grayFirst};
    z-index: -3;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 500px;
        height: 200vh;
        left: 27vw;
        transform: rotate(41deg);
        pointer-events: none;
    }

    &::after {
        ${shadowPharse};
        content: ${({ pharse }) => (pharse ? `'${pharse}'` : 'Hello')};
        transform-origin: left bottom;
        transform: rotate(-22deg) translate(-20vw, calc(0vh));
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            transform: rotate(-41deg) translate(-27vw, calc(0vh));
        }
    }
`;

export default BackgroundBlock;
