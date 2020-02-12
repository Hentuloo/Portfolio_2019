import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph, ParagraphTitle } from './Paragraph';

storiesOf('atoms/Paragraph', module)
    .add('default', () => <Paragraph>Lorem ipsum</Paragraph>)
    .add('header', () => <Paragraph asTitle>Lorem ipsum</Paragraph>)
    .add('red', () => (
        <Paragraph underline asTitle red>
            Something about me
        </Paragraph>
    ))
    .add('title', () => <ParagraphTitle>Lorem ipsum</ParagraphTitle>);
