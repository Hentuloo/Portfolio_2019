import React, { useReducer, useState } from 'react';
import validator from 'validator';

import { useSelector } from 'react-redux';
import { useMouseEffect } from 'hooks/useMouseEffect';

import Constants from 'config/Constants';
import { encode } from 'config/utils';
import { PrefixNote } from 'components/atoms';

import letterLarge from 'images/lettersSvg/letterLarge.svg';
import letterFirst from 'images/lettersSvg/letterFirst.svg';
import letterSecond from 'images/lettersSvg/letterSecond.svg';
import letterValidFalse from 'images/lettersSvg/letterValidFalse.svg';
import letterValidTrue from 'images/lettersSvg/letterValidTrue.svg';
import {
    InputWrapper,
    InputSubmit,
    Textarea,
    InputEmail,
    InputName,
    Form,
    Wrapper,
    LetterIcon,
} from './styles';
import SubmittedForm from './SubmittedForm';

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

    const { getMove, getMoveOnHover } = useMouseEffect();
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
        textAreaPlaceholder,
        emailPlaceholder,
        namePlaceholder,
        submitTitle,
        validatorTextArea,
        validatorEmail,
        validatorName,
    } = Constants[lang].FORM;

    if (sendedWithSuccess) return <SubmittedForm />;

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
                    <PrefixNote>{validatorName}</PrefixNote>
                    <LetterIcon
                        className="large"
                        src={letterLarge}
                        alt="ikona listu"
                        {...getMove({
                            sensitivity: 0.03,
                            x: '-10px',
                            y: '-10px',
                        })}
                    />
                    <LetterIcon
                        className="first"
                        src={letterFirst}
                        alt="ikona listu"
                    />
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
                    <PrefixNote>{validatorEmail}</PrefixNote>
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
                    <PrefixNote>{validatorTextArea}</PrefixNote>
                    <LetterIcon
                        className="second"
                        src={letterSecond}
                        alt="ikona listu"
                    />
                </InputWrapper>
                <InputSubmit
                    isValid={isValid}
                    type="submit"
                    value={submitTitle}
                />
                <LetterIcon
                    className="valid"
                    src={isValid ? letterValidTrue : letterValidFalse}
                    alt="ikona listu"
                    {...getMoveOnHover({
                        sensitivity: 0.6,
                        x: '-30px',
                        y: '-30px',
                    })}
                />
            </Form>
        </Wrapper>
    );
};

export default ContactTemplate;
