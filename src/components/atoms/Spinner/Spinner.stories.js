import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Wrapper as SpinerWrapper, Spiner, WhiteSpiner } from './Spinner';
import BackgroundSquare from '../BackgroundPhrase';

const CenterWrapper = styled.div`
    position: relative;
    min-width: 700px;
    min-height: 570px;

    ${SpinerWrapper} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

storiesOf('atoms/Spiner', module)
    .add('primary', () => (
        <CenterWrapper>
            <Spiner />
        </CenterWrapper>
    ))
    .add('with background', () => (
        <BackgroundSquare white={<WhiteSpiner />} gray={<Spiner />} />
    ));
