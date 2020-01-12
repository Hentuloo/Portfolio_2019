import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { WithMouseMove } from 'providers/WithMouseMove';
import { BackgroundView, Spiner, WhiteSpiner } from 'components/atoms';

import { whiteSentence, graySentence } from 'images/HelloSentence';
import { grayCodeBackground, whiteCodeBackground } from 'images/CodeBackground';

const BackgroundImage = styled.img`
    position: relative;
    display: block;
    max-width: 94vw;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 80vw;
    }
`;
const CodeImage = styled(BackgroundImage)`
    margin-top: -40px;
    margin-right: -120px;
    max-width: 120vw;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 80vw;
        margin-top: -15vh;
        margin-right: -450px;
    }
`;

const CustomBackgroundView = () => {
    const { current } = useSelector(state => state.ActivePage);

    if (current === 'portfolio') {
        return (
            <BackgroundView
                white={<BackgroundImage src={graySentence} alt="Hello" />}
                gray={<BackgroundImage src={whiteSentence} alt="Hello" />}
            />
        );
    }
    if (current === 'contact') {
        return (
            <BackgroundView
                white={
                    <CodeImage src={whiteCodeBackground} alt="Code dashes" />
                }
                gray={<CodeImage src={grayCodeBackground} alt="Code dashes" />}
            />
        );
    }
    return (
        <BackgroundView
            white={
                <WithMouseMove
                    gsapDelay={0.5}
                    attr={{
                        sensitivity: -0.1,
                        x: 60,
                        y: 60,
                    }}
                    render={() => <WhiteSpiner />}
                />
            }
            gray={
                <WithMouseMove
                    gsapDelay={0.5}
                    attr={{
                        sensitivity: -0.1,
                        x: 60,
                        y: 60,
                    }}
                    render={() => <Spiner />}
                />
            }
        />
    );
};

export default CustomBackgroundView;
