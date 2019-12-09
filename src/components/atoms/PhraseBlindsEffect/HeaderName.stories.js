import React from 'react';
import { storiesOf } from '@storybook/react';
import PhraseBlindsEffect from './PhraseBlindsEffect';

storiesOf('atoms/PhraseBlindsEffect', module)
    .add('primary', () => <PhraseBlindsEffect>Hello world</PhraseBlindsEffect>)
    .add('black', () => (
        <PhraseBlindsEffect gray>Hello world</PhraseBlindsEffect>
    ));
