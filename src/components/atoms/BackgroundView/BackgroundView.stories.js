import React from 'react';
import { storiesOf } from '@storybook/react';

import {
    SquareWrapper,
    SquareItem,
    SquareCenterContent,
} from './SquareWithPhrase';
import { ShadowPhraseWrapper, ShadowPhraseItem } from './ShadowWithPhrase';

import BackgroundView from './index';

storiesOf('atoms/BackgroundView', module)
    .add('compile', () => <BackgroundView>Hell</BackgroundView>)
    .add('block', () => <SquareWrapper />)
    .add('Square with phrase', () => (
        <SquareWrapper>
            <SquareCenterContent>
                <SquareItem>Eldi</SquareItem>
            </SquareCenterContent>
        </SquareWrapper>
    ))
    .add('gray pharse', () => (
        <ShadowPhraseWrapper phrase="HELLO">
            <ShadowPhraseItem>Siem</ShadowPhraseItem>
        </ShadowPhraseWrapper>
    ));
