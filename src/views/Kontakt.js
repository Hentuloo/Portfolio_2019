import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
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
const Button = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.redFirst};
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
const Kontakt = () => {
  const successInUrl = window.location.hash.substring(1);

  if (successInUrl === 'kontakt-success') {
    // when form was send
    return (
      <Wrapper success>
        <Form disabled>
          <InputName type="text" name="name" placeholder="Imie:" disabled />
          <InputEmail type="email" name="email" placeholder="Email:" disabled />
          <Textarea name="message" placeholder="Treść wiadomości" disabled />
          <Button disabled>Wyślij</Button>
          <Message>Wiadomość została wysłana popranwnie!</Message>
        </Form>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Form
        name="portfolio-contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/#kontakt-success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="portfolio-contact" />
        <InputName
          type="text"
          name="name"
          placeholder="Imie:"
          minlength="4"
          maxlength="20"
          required
        />
        <InputEmail
          type="email"
          name="email"
          placeholder="Email:"
          minlength="6"
          maxlength="30"
          required
        />
        <Textarea
          name="message"
          placeholder="Treść wiadomości"
          minlength="10"
          maxlength="200"
          required
        />
        <Button>WYŚLIJ</Button>
      </Form>
    </Wrapper>
  );
};

export default Kontakt;
