import styled from 'styled-components';

const WaveImage = styled.img`
    position: fixed;
    bottom: 60px;
    width: 100%;
    @media screen and (orientation: landscape) {
        width: 140%;
        transform: translate(-13%, 6px);
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: none;
    }
`;

export default WaveImage;
