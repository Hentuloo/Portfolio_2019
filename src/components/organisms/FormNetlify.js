import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import validator from 'validator';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

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
  right: 0%;
  top: 0%;
  font-family: 'Rhodium Libre', serif;
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
`;
const InputSubmit = styled.input`
  border: 0px;
  background-color: ${({ theme }) => theme.redFirst};
  cursor: pointer;
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
    padding: 3px;
    border: none;
    font-size: ${({ theme }) => theme.font.m};
    font-family: 'Baloo Tamma', cursive;
    &:focus {
      outline: none;
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
  margin: 0px auto;
  ${({ success }) =>
    !success &&
    css`
      opacity: 0;
      animation: ${opacity} 0.5s 0.6s linear forwards;
    `}
`;

class FormNetlify extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    valid: false,
  };

  handleChangeForm = e => {
    const { name, email, message } = this.state;
    let valid = true;
    this.setState({ [e.target.name]: e.target.value });
    if (!validator.isEmail(email)) {
      valid = false;
    }
    if (!validator.isLength(name, { min: 6, max: 30 })) {
      valid = false;
    }
    if (!validator.isLength(message, { min: 10, max: 200 })) {
      valid = false;
    }
    this.setState({ valid });
  };

  render() {
    const { success, langContext } = this.props;
    const { name, email, message, valid } = this.state;

    const {
      formAction,
      messageCorrectEmailSend,
      textAreaPlaceholder,
      emailPlaceholder,
      namePlaceholder,
      submitTitle,
      validatorTextArea,
      validatorEmail,
      validatorName,
    } = Constants[langContext].FORM;

    if (success) {
      return (
        <Wrapper success>
          <Form disabled>
            <InputName
              type="text"
              name="name"
              placeholder={namePlaceholder}
              disabled
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
          action={formAction}
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
              value={name}
              onChange={this.handleChangeForm}
            />
            <ValidatiorSettings>{validatorName}</ValidatiorSettings>
          </InputWrapper>
          <InputWrapper>
            <InputEmail
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              required
              value={email}
              onChange={this.handleChangeForm}
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
              value={message}
              onChange={this.handleChangeForm}
            />
            <ValidatiorSettings>{validatorTextArea}</ValidatiorSettings>
          </InputWrapper>
          <InputSubmit disabled={!valid} type="submit" value={submitTitle} />
        </Form>
      </Wrapper>
    );
  }
}

FormNetlify.propTypes = {
  langContext: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
FormNetlify.defaultProps = {
  success: false,
};

export default withContext(FormNetlify);
