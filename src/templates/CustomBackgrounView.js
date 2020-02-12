import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

import { BackgroundView } from 'components/atoms';
import { whiteSentence, graySentence } from 'images/HelloSentence';

const hide = keyframes`
99.9%{
  opacity:0;
}
100%{
  opacity:0;
  display:none;
}
`;

const BackgroundImage = styled.img`
    position: relative;
    display: block;
    max-width: 94vw;
    animation: ${hide} 0.1s 3.1s linear forwards;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 80vw;
    }
`;

const CustomBackgroundView = () => {
    const { current, previous } = useSelector(state => state.ActivePage);

    if (current === 'portfolio' && previous === 'portfolio') {
        return (
            <BackgroundView
                white={<BackgroundImage src={graySentence} alt="Hello" />}
                gray={<BackgroundImage src={whiteSentence} alt="Hello" />}
            />
        );
    }

    return <BackgroundView />;
};

export default CustomBackgroundView;
