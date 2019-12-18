import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import wavesBG from 'images/Waves-bg.svg';

const wavePortfolio = keyframes`
to{
     stroke-dashoffset: 32vw;
}
`;
const waveProjects = keyframes`
to{
     stroke-dashoffset: -160vw;
}
`;
const waveContact = keyframes`
to{
     stroke-dashoffset: -70vw;
}
`;

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 30px;
    top: -30px;
    left: 0%;
    background-image: url(${wavesBG});
    z-index: 10;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: none;
    }
`;

const Path = styled.path`
    stroke-dasharray: 70vw;
    ${({ previousPage }) => {
        switch (previousPage) {
            case 'portfolio':
                return css`
                    stroke-dashoffset: 32vw;
                `;
            case 'projects':
                return css`
                    stroke-dashoffset: -160vw;
                `;
            case 'contact':
                return css`
                    stroke-dashoffset: -70vw;
                `;
            default:
                return css`
                    stroke-dashoffset: 32vw;
                `;
        }
    }};
    ${({ activePage }) => {
        switch (activePage) {
            case 'portfolio':
                return css`
                    animation: ${wavePortfolio} 1.4s cubic-bezier(0, 0.59, 1, 1)
                        both;
                `;
            case 'projects':
                return css`
                    animation: ${waveProjects} 1.4s cubic-bezier(0, 0.59, 1, 1)
                        both;
                `;
            case 'contact':
                return css`
                    animation: ${waveContact} 1.4s cubic-bezier(0, 0.59, 1, 1)
                        both;
                `;
            default:
                return css`
                    animation: ${wavePortfolio} 1.4s cubic-bezier(0, 0.59, 1, 1)
                        both;
                `;
        }
    }};
`;

const Wave = () => {
    const { current, previous } = useSelector(state => state.ActivePage);
    return (
        <Wrapper role="presentation">
            <svg
                width="792"
                height="30"
                viewBox="0 0 792 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    onClick={e => console.log(e.target.getTotalLength())}
                    d="M1 7.79363C21.4744 0.719162 31.9613 27.5277 51.9363 24.9213C71.9114 22.3149 74.9076 8.91065 99.377 7.79363C123.846 6.67661 127.841 27.1553 151.312 26.783C174.783 26.4107 181.774 7.04893 202.748 5.93191C223.722 4.81489 232.211 23.4319 248.69 23.4319C265.17 23.4319 272.66 3.69788 298.129 4.81489C323.597 5.9319 332.086 29.7617 353.559 26.783C375.032 23.8043 382.5 5.45125 399.5 4.51937C416.5 3.58749 420.461 25.1833 440.436 22.5769C460.411 19.9705 465.408 6.37268 489.877 5.25566C514.346 4.13864 518.341 24.6174 541.812 24.245C565.283 23.8727 572.274 4.51097 593.248 3.39395C614.222 2.27692 622.711 20.894 639.19 20.894C655.67 20.894 663.16 1.15992 688.629 2.27693C714.097 3.39393 722.586 27.2237 744.059 24.245C765.532 21.2663 772.024 -0.701797 791.5 2.27693"
                    stroke="rgb(215, 108, 108)"
                    strokeWidth="6"
                    activePage={current}
                    previousPage={previous}
                />
            </svg>
        </Wrapper>
    );
};

export default Wave;
