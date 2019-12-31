import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

const Wrapper = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: gray;
    padding: 50px 80px;
`;

storiesOf('atoms/Input', module).add('primary', () => (
    <Wrapper>
        <Input type="text" placeholder="Hello" />
    </Wrapper>
));
