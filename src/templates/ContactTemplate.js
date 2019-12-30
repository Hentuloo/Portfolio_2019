import React, { useReducer, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import validator from 'validator';

import { useSelector } from 'react-redux';

import Constants from 'config/Constants';
import { encode } from 'config/utils';

const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;
const ValidatiorSettings = styled.span`
    position: absolute;
    right: 2%;
    top: 0%;
    font-family: ${({ theme }) => theme.font.second};
    font-size: ${({ theme }) => theme.font.xxxs};
    color: ${({ theme }) => theme.grayDark};
    text-transform: uppercase;
`;
const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const Message = styled.h3`
    position: absolute;
    bottom: 0%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, 100%);
    text-align: center;
    background-color: ${({ theme }) => theme.redFirst};
    font-size: ${({ theme }) => theme.font.xs};
    padding: 4px 0px;
    border-radius: 5px;
    box-shadow: 0px 15px 29px -3px rgba(0, 0, 0, 0.75);
`;
const InputSubmit = styled.input`
    border: 0px;
    background-color: ${({ theme }) => theme.redFirst};
    cursor: pointer;
    line-height: ${({ theme }) => theme.font.xs};
`;
const Textarea = styled.textarea`
    background-color: ${({ theme }) => theme.graySecond};
    && {
        height: 18vh;
    }
`;
const InputEmail = styled.input`
    background-color: ${({ theme }) => theme.graySecond};
    &:valid {
        background-color: ${({ theme }) => theme.graySecond};
    }
`;
const InputName = styled.input`
    background-color: ${({ theme }) => theme.redThird};
`;
const Form = styled.form`
    display: flex;
    width: 100%;
    min-height: 75vh;
    margin: 6vh 0px 100px 0px;
    flex-direction: column;
    justify-content: space-around;

    color: black;
    position: relative;
    input,
    textarea,
    button {
        width: 100%;
        height: 8vh;
        min-height: 40px;
        padding: 10px 10px 6px;
        border: none;
        border-radius: 5px;
        font-size: ${({ theme }) => theme.font.m};
        font-family: ${({ theme }) => theme.font.first};
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        cursor: none;
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            padding: 10px 10px;
        }
        &:focus {
            outline: none;
            transform: scale(1.04);
            box-shadow: 0px 15px 29px -3px rgba(0, 0, 0, 0.75);
        }
        &:disabled {
            background-color: transparent;
            border: 1px solid black;
            opacity: 0.4;
        }
        &::placeholder {
            color: black;
            text-transform: uppercase;
        }
    }
`;
const Wrapper = styled.section`
    width: 80%;
    max-width: 700px;
    margin: 20px auto 0px auto;
    ${({ success }) =>
        !success &&
        css`
            opacity: 0;
            animation: ${opacity} 0.5s linear forwards;
        `}
  @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
   max-width: 900px;
  }
`;

const ContactTemplate = () => {
    const lang = useSelector(({ language }) => language);
    const [sendedWithSuccess, setSendedWithSuccess] = useState(false);
    const [isValid, setValid] = useState(false);

    const [inputValue, setInputValue] = useReducer(
        (state, newState) => ({
            ...state,
            ...newState,
        }),
        {
            name: '',
            email: '',
            message: '',
        },
    );

    const handleChange = e => {
        const { name: inputName, value } = e.target;

        setInputValue({ [inputName]: value });

        const { name, email, message } = inputValue;

        let valid = true;

        if (!validator.isEmail(email)) {
            valid = false;
        }
        if (!validator.isLength(name, { min: 6, max: 30 })) {
            valid = false;
        }
        if (!validator.isLength(message, { min: 10, max: 200 })) {
            valid = false;
        }

        if (valid !== isValid) {
            setValid(valid);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': 'contact', ...inputValue }),
            });
            if (response.statusText === 'OK') {
                setSendedWithSuccess(true);
            }
        } catch (error) {
            throw Error(error);
        }
    };
    const {
        messageCorrectEmailSend,
        textAreaPlaceholder,
        emailPlaceholder,
        namePlaceholder,
        submitTitle,
        validatorTextArea,
        validatorEmail,
        validatorName,
    } = Constants[lang].FORM;

    if (sendedWithSuccess) {
        return (
            <Wrapper success>
                <Form disabled>
                    <InputName
                        type="text"
                        name="name"
                        placeholder={namePlaceholder}
                        disabled
                        autocomplete="off"
                    />
                    <InputEmail
                        type="email"
                        name="email"
                        placeholder={emailPlaceholder}
                        disabled
                    />
                    <Textarea
                        name="message"
                        placeholder={textAreaPlaceholder}
                        disabled
                        autocomplete="off"
                    />
                    <InputSubmit disabled value={submitTitle} />
                    <Message>{messageCorrectEmailSend}</Message>
                </Form>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <InputWrapper>
                    <InputName
                        type="text"
                        name="name"
                        placeholder={namePlaceholder}
                        minlength="6"
                        maxlength="20"
                        required
                        value={inputValue.name}
                        onChange={handleChange}
                    />
                    <ValidatiorSettings>{validatorName}</ValidatiorSettings>
                </InputWrapper>
                <InputWrapper>
                    <InputEmail
                        type="email"
                        name="email"
                        placeholder={emailPlaceholder}
                        required
                        value={inputValue.email}
                        onChange={handleChange}
                    />
                    <ValidatiorSettings>{validatorEmail}</ValidatiorSettings>
                </InputWrapper>
                <InputWrapper>
                    <Textarea
                        name="message"
                        placeholder={textAreaPlaceholder}
                        minlength="10"
                        maxlength="200"
                        required
                        value={inputValue.message}
                        onChange={handleChange}
                    />
                    <ValidatiorSettings>{validatorTextArea}</ValidatiorSettings>
                </InputWrapper>
                <InputSubmit
                    disabled={!isValid}
                    type="submit"
                    value={submitTitle}
                />
            </Form>
        </Wrapper>
    );
};

export default ContactTemplate;
