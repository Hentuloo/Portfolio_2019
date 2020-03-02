import React, { useState, useReducer, useRef } from 'react';
import styled from 'styled-components';
import { circlesWithGradient } from 'images/Circles';
import { LetterImage } from './LetterImage';
import { sendNetilfyForm, isValid, mergeInputObjects } from './utils';

import Form from './Form';

const Wrapper = styled.div`
    position: relative;
    display: block;
    width: 84%;
    max-width: 355px;
    height: calc(100vh - 260px);
    max-height: 500px;
    margin: 80px auto 0px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.color.white[0]};
    cursor: none;
    ${({ theme }) => theme.breakPointMobileKeyboard} {
        height: calc(100vh - 120px);
        margin: 80px auto 0px auto;
    }

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 455px;
        height: calc(100vh - 200px);
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        max-width: 355px;
        width: 100%;
        height: 100%;
        max-height: 500px;
        margin: 0px auto 0px auto;
    }
`;
const InnerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    border-radius: 15px;
    padding-bottom: 40px;
    text-align: center;
    font-family: ${({ theme }) => theme.font.second};
    overflow-y: auto;
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        padding-bottom: 10px;
    }
`;
const CirclesImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 80px;
    top: 0%;
    left: 0%;
    border-radius: 15px;
    overflow: hidden;
    pointer-events: none;
`;
const CirclesImage = styled.img`
    position: relative;
    width: 100%;
    top: 50%;
    transform: translateY(-85%);
`;
const inputsInit = {
    pName: {
        value: '',
        isInValid: null,
        letterStepReached: false,
    },
    pEmail: {
        value: '',
        isInValid: null,
        letterStepReached: false,
    },
    pMessage: {
        value: '',
        isInValid: null,
        letterStepReached: false,
    },
};

export const ContactForm = () => {
    const [letterStep, setLetterStep] = useState(1);
    const [firstInputTouched, setFirstInputTouched] = useState(false);
    const [formStatus, setFormStatus] = useReducer(
        (prev, next) => ({ ...prev, ...next }),
        {
            isSending: null,
            formMessage: null,
        },
    );
    const [inputs, setInputs] = useReducer(
        (prev, next) => ({ ...prev, ...next }),
        inputsInit,
    );
    const formRef = useRef(null);

    const increaseLetterStep = () =>
        setLetterStep(typeof letterStep === 'string' ? 1 : letterStep + 1);

    const handleFocusFirstInput = () => {
        if (!firstInputTouched) {
            increaseLetterStep();
            setFirstInputTouched(true);
        }
        setTimeout(() => {
            formRef.current.scrollTop = '100';
        }, 400);
    };
    const onInputChange = e => {
        const { name, value } = e.target;
        const valid = isValid(name, value);
        if (inputs[name].letterStepReached === false && valid) {
            increaseLetterStep();
            setInputs(
                mergeInputObjects(inputs, name, {
                    value,
                    isInValid: !valid,
                    letterStepReached: true,
                }),
            );
            return;
        }
        setInputs(
            mergeInputObjects(inputs, name, { value, isInValid: !valid }),
        );
    };
    const handleSubmitForm = async e => {
        e.preventDefault();
        setFormStatus({ isSending: true, formMessage: null });
        setLetterStep('send');
        setFirstInputTouched(false);
        try {
            const response = await sendNetilfyForm(inputs);
            if (response.ok) {
                setFormStatus({
                    isSending: false,
                    formMessage: `Dostarczono`,
                });
                setLetterStep('success');

                setInputs(inputsInit);
            }
        } catch (err) {
            setLetterStep('failure');
            setFormStatus({
                isSending: true,
                formMessage: `Coś poszło nie tak (${err.message ||
                    err.status})`,
            });
        }
    };

    return (
        <Wrapper>
            <InnerWrapper ref={formRef}>
                <Form
                    formStatus={formStatus}
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
