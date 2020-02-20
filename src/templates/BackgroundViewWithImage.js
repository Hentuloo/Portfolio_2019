import React from 'react';
import styled from 'styled-components';

import { BackgroundView } from 'components/atoms';
import { whiteSentence, graySentence } from 'images/HelloSentence';

const BackgroundImage = styled.img`
    position: relative;
    display: block;
    max-width: 94vw;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 80vw;
    }
`;

const BackgroundViewWithImage = () => {
    return (
        <BackgroundView
            white={<BackgroundImage src={graySentence} alt="Hello" />}
            gray={<BackgroundImage src={whiteSentence} alt="Hello" />}
        />
    );
};

export default BackgroundViewWithImage;
