import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Mountain, Charts, Box, Joystick } from './index';

const WrapperCenter = styled.div`
    display: grid;
    height: 100vh;
    justify-content: center;
    align-items: center;
    svg {
        transform: scale(1.5);
    }
`;

storiesOf('atoms/', module)
    .addDecorator(storyFn => <WrapperCenter>{storyFn()}</WrapperCenter>)
    .add('Mountain', () => <Mountain />)
    .add('Charts', () => <Charts />)
    .add('Box', () => <Box />)
    .add('Joystick', () => <Joystick />);
