import React from 'react';
import { storiesOf } from '@storybook/react';

import {
    SquareWrapper,
    SquareItem,
    SquareCenterContent,
} from './SquareWithPhrase';
import { ShadowPhraseWrapper, ShadowPhraseItem } from './ShadowWithPhrase';

import BackgroundPharse from './index';

storiesOf('atoms/BackgroundPhrase', module)
    .add('compile', () => <BackgroundPharse>Hell</BackgroundPharse>)
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
