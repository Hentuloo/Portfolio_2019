import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Input, Textarea } from 'components/atoms';
import { isValid } from './utils';

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
    font-weight: 500;
`;
const SubTitle = styled.p`
    width: 85%;
    margin: 5px auto 10px;
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.xxs};
    ${({ red }) =>
        red &&
        css`
            font-weight: 500;
            color: ${({ theme }) => theme.color.brand[1]};
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
`;

const Form = ({
    formStatus: { isSending, formMessage },
    onInputChange,
    inputsValues,
    handleFocusFirstInput,
    onSubmit,
}) => {
    return (
        <Wrapper
            autocomplete="false"
            onSubmit={onSubmit}
            name="contact"
            method="post"
            data-netlify="true"
        >
            <Title>Kontakt</Title>
            <SubTitle>
                Aktualnie poszukuję pracy na stanowisku Junior Web, napisz a ja
                spróbuje pomóc
            </SubTitle>
            <StyledInput
                isInvalid={!isValid('pName', inputsValues.pName)}
                onFocus={handleFocusFirstInput}
                labelName="inputName"
                labelText="Wpisz swoje imię"
                name="pName"
                placeholder="Twoje imię:"
                validationMessage="6-30 znaków"
                value={inputsValues.pName}
                onChange={onInputChange}
            />
            <StyledInput
                isInvalid={!isValid('pEmail', inputsValues.pEmail)}
                labelName="inputEmail"
                labelText="Wpisz swój email"
                name="pEmail"
                placeholder="Twój email:"
                validationMessage="Email"
                value={inputsValues.pEmail}
                onChange={onInputChange}
            />
            <StyledTextarea
                isInvalid={!isValid('pMessage', inputsValues.pMessage)}
                labelName="inputMessage"
                labelText="Wpisz swoją wiadomość"
                name="pMessage"
                placeholder="W czym mogę Ci pomóc?"
                validationMessage="10-200 znaków"
                value={inputsValues.pMessage}
                onChange={onInputChange}
            />
            <Button type="submit">Wyślij</Button>
            {isSending && <SubTitle red>Wysyłanie</SubTitle>}
            {formMessage && <SubTitle red>{formMessage}</SubTitle>}
            {isSending !== null && (
                <SubTitle right>
                    P.S. jeśli podoba Ci się strona koniecznie sprawdź ją na
                    większym ekranie!
                </SubTitle>
            )}
        </Wrapper>
    );
};

Form.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    inputsValues: PropTypes.shape({
        pName: PropTypes.string,
        pEmail: PropTypes.string,
        pMessage: PropTypes.string,
    }).isRequired,
    handleFocusFirstInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formStatus: PropTypes.shape({
        isSending: PropTypes.bool,
        formMessage: PropTypes.string,
    }).isRequired,
};

export default Form;
