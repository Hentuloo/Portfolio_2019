import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { ContactForm } from './ContactForm';
import { LetterImage } from './LetterImage';

export const ImageWrapper = styled.div`
    width: 400px;
    height: 400px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: gray;

    z-index: -1;
    div {
        position: relative;
        top: 25%;
    }
`;

storiesOf('organism', module)
    .add('ContactForm', () => <ContactForm />)
    .add('Letter image', () => (
        <ImageWrapper>
            <LetterImage step={number('step', 1)} />
        </ImageWrapper>
    ));
