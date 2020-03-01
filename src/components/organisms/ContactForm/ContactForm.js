import React, { useState, useReducer, useRef } from 'react';
import styled from 'styled-components';

import { circlesWithGradient } from 'images/Circles';
import { LetterImage } from './LetterImage';

import Form from './Form';

const Wrapper = styled.div`
    position: relative;
    display: block;
    width: 84%;
    height: calc(100vh - 250px);
    margin: 110px auto 0px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.color.white[0]};
    ${({ theme }) => theme.breakPointMobileKeyboard} {
        height: calc(100vh - 120px);
        margin: 80px auto 0px auto;
    }
`;
const InnerWrapper = styled.form`
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    border-radius: 15px;
    padding-bottom: 40px;
    text-align: center;
    font-family: ${({ theme }) => theme.font.second};
    overflow-y: auto;
`;
const CirclesImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 80px;
    top: 0%;
    left: 0%;
    border-radius: 15px;
    overflow: hidden;
`;
const CirclesImage = styled.img`
    position: relative;
    width: 100%;
    top: 50%;
    transform: translateY(-85%);
`;

export const ContactForm = () => {
    const formRef = useRef(null);
    const [inputs, setInputs] = useReducer(
        (prev, next) => ({ ...prev, ...next }),
        {
            pName: '',
            pEmail: '',
            pMessage: '',
        },
    );
    const [letterStep, setLetterStep] = useState(1);

    const handleFocusFirstInput = () => {
        setTimeout(() => {
            formRef.current.scrollTop = '100';
        }, 400);
    };
    const onInputChange = e => {
        const { name, value } = e.target;
        setInputs({ [name]: value });
    };
    const handleSubmitForm = e => {
        e.preventDefault();
    };

    console.log(setLetterStep);

    return (
        <Wrapper>
            <InnerWrapper ref={formRef}>
                <Form
                    handleFocusFirstInput={handleFocusFirstInput}
                    inputsValues={inputs}
                    onInputChange={onInputChange}
                    onSubmit={handleSubmitForm}
                />
            </InnerWrapper>
            <LetterImage step={letterStep} />
            <CirclesImageWrapper>
                <CirclesImage src={circlesWithGradient} />
            </CirclesImageWrapper>
        </Wrapper>
    );
};
