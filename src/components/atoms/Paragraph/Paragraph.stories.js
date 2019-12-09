import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('atoms/Paragraph', module)
    .add('basic', () => <Paragraph>sdsd</Paragraph>)
    .add('bold', () => <Paragraph bold>sdsd</Paragraph>);
