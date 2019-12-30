import React from 'react';
import { useSelector } from 'react-redux';

import Constants from 'config/Constants';
import {
    Message,
    InputSubmit,
    Textarea,
    InputEmail,
    InputName,
    Form,
    Wrapper,
} from './styles';

const ContactTemplate = () => {
    const lang = useSelector(({ language }) => language);

    const {
        messageCorrectEmailSend,
        textAreaPlaceholder,
        emailPlaceholder,
        namePlaceholder,
        submitTitle,
    } = Constants[lang].FORM;

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
};

export default ContactTemplate;
