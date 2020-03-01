import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import { circlesWithGradient } from 'images/Circles';
import { LetterImage } from './LetterImage';

import Steps from './Steps';

const Wrapper = styled.div`
    position: relative;
    display: block;
    width: 84%;
    height: calc(100vh - 200px);
    margin: 110px auto 0px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.color.white[0]};
    ${({ theme }) => theme.breakPointMobileKeyboard} {
        height: calc(100vh - 100px);
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
    const [inputs, setInputs] = useReducer(
        (prev, next) => ({ ...prev, ...next }),
        {
            name: '',
            email: '',
            message: '',
        },
    );
    const [step, setStep] = useState(1);

    const onInputChange = e => {
        const { name, value } = e;
        setInputs({ [name]: value });
    };
    const changeStep = (e, amount) => {
        e.preventDefault();
        const newStepIndex = step + amount;
        if (newStepIndex < 1) return;
        if (newStepIndex > 7) return;
        setStep(newStepIndex);
    };

    return (
        <Wrapper>
            <InnerWrapper>
                <Steps
                    active={step}
                    inputsValues={inputs}
                    onInputChange={onInputChange}
                    nextStep={e => changeStep(e, 1)}
                    prevStep={e => changeStep(e, -1)}
                />
            </InnerWrapper>
            <LetterImage />
            <CirclesImageWrapper>
                <CirclesImage src={circlesWithGradient} />
            </CirclesImageWrapper>
        </Wrapper>
    );
};
