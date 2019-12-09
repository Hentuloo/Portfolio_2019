import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Square from './Square';
import SquarePhrase from './SquarePhrase';
import BackgroundPharse from './index';
import ShadowPhrase from './ShadowPhrase';

const StyledSquarePhrase = styled(Square)`
    ${SquarePhrase}
`;
const StyledShadowPhrase = styled.div`
    ${ShadowPhrase}
`;

storiesOf('atoms/BackgroundPharse', module)
    .add('compile', () => <BackgroundPharse phrase="HELLO" />)
    .add('block', () => <Square />)
    .add('Square with phrase', () => (
        <StyledSquarePhrase phrase="HELLO"></StyledSquarePhrase>
    ))
    .add('gray pharse', () => (
        <StyledShadowPhrase phrase="HELLO"></StyledShadowPhrase>
    ));
