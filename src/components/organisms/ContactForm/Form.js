import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { Input, Textarea } from 'components/atoms';
import Constants from 'config/Constants';

const Wrapper = styled.form`
    position: relative;
    display: grid;
    height: 100%;
    grid-row-gap: 3px;
`;
const Title = styled.h2`
    margin: 0px;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.l};
    font-weight: 300;
`;
const SubTitle = styled.p`
    width: 85%;
    margin: 5px auto 10px;
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.xxs};
    ${({ red }) =>
        red &&
        css`
            font-weight: 300;
            color: ${({ theme }) => theme.color.brand[1]};
        `}
    ${({ right }) =>
        right &&
        css`
            text-align: right;
        `}
`;
const StyledInput = styled(Input)`
    margin: 5px auto 5px;
`;
const StyledTextarea = styled(Textarea)`
    margin: 10px auto 5px;
`;
const Button = styled.button`
    border: none;
    font-size: ${({ theme }) => theme.font.l};
    background-color: transparent;
    color: ${({ theme }) => theme.color.brand[0]};
    text-transform: uppercase;
    margin: 5px auto 15px;
    outline-color: ${({ theme }) => theme.color.gray[3]};
    cursor: none;
`;

const Form = ({
    formStatus: { isSending, formMessage },
    onInputChange,
    inputsValues,
    handleFocusFirstInput,
    onSubmit,
}) => {
    const lang = useSelector(({ language }) => language);
    return (
        <Wrapper
            autocomplete="false"
            onSubmit={onSubmit}
            name="contact"
            method="post"
            data-netlify="true"
        >
            <Title>{Constants[lang].FORM.contact}</Title>
            <SubTitle>{Constants[lang].FORM.subTitle}</SubTitle>
            <StyledInput
                isInvalid={inputsValues.pName.isInValid}
                onFocus={handleFocusFirstInput}
                labelName="inputName"
                labelText={Constants[lang].FORM.name.label}
                name="pName"
                placeholder={Constants[lang].FORM.name.placeholder}
                validationMessage={Constants[lang].FORM.name.validMessage}
                value={inputsValues.pName.value}
                onChange={onInputChange}
            />
            <StyledInput
                isInvalid={inputsValues.pEmail.isInValid}
                labelName="inputEmail"
                labelText={Constants[lang].FORM.email.label}
                name="pEmail"
                placeholder={Constants[lang].FORM.email.placeholder}
                validationMessage={Constants[lang].FORM.email.validMessage}
                value={inputsValues.pEmail.value}
                onChange={onInputChange}
            />
            <StyledTextarea
                isInvalid={inputsValues.pMessage.isInValid}
                labelName="inputMessage"
                labelText={Constants[lang].FORM.message.label}
                name="pMessage"
                placeholder={Constants[lang].FORM.message.placeholder}
                validationMessage={Constants[lang].FORM.message.validMessage}
                value={inputsValues.pMessage.value}
                onChange={onInputChange}
            />
            <Button type="submit">{Constants[lang].FORM.send}</Button>
            {isSending && (
                <SubTitle red>{Constants[lang].FORM.sending}</SubTitle>
            )}
            {formMessage && <SubTitle red>{formMessage}</SubTitle>}
            {isSending !== null && (
                <SubTitle right>{Constants[lang].FORM.ps}</SubTitle>
            )}
        </Wrapper>
    );
};

Form.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    inputsValues: PropTypes.shape({
        pName: PropTypes.shape({
            value: PropTypes.string,
            isInValid: PropTypes.bool,
        }),
        pEmail: PropTypes.shape({
            value: PropTypes.string,
            isInValid: PropTypes.bool,
        }),
        pMessage: PropTypes.shape({
            value: PropTypes.string,
            isInValid: PropTypes.bool,
        }),
    }).isRequired,
    handleFocusFirstInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formStatus: PropTypes.shape({
        isSending: PropTypes.bool,
        formMessage: PropTypes.string,
    }).isRequired,
};

export default Form;
