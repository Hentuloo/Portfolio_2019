/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InputSC = styled.input`
    width: 100%;
    min-height: 40px;
    padding: 5px 10px 6px 18px;
    border: none;
    font-size: ${({ theme }) => theme.font.m};
    font-family: ${({ theme }) => theme.font.second};
    cursor: none;
    outline: none;

    &:disabled {
        background-color: transparent;
        border: 1px solid black;
        opacity: 0.4;
    }
    &::placeholder {
        color: ${({ theme }) => theme.color.black[0]};
    }
`;
export const InputWrapperSC = styled.label`
    position: relative;
    display: block;
    width: 80%;
    margin: 0px auto;
    &::after {
        position: absolute;
        content: '';
        width: 85%;
        height: 3px;
        bottom: 0%;
        left: 18px;
        background-color: ${({ theme }) => theme.color.gray[0]};
    }
`;

export const TextareaWrapperSC = styled(InputWrapperSC)`
    width: calc(80% - 20px);
    background-color: ${({ theme }) => theme.color.gray[5]};

    &::after {
        display: none;
    }
`;
export const TextareaSC = styled(InputSC)`
    min-height: 70px;
    padding: 4px 10px 6px 12px;
    font-size: ${({ theme }) => theme.font.s};
    background-color: transparent;
`;

export const Input = ({
    className,
    labelName,
    labelText,
    name,
    type,
    placeholder,
    ...props
}) => {
    return (
        <InputWrapperSC className={className} htmlFor={labelName || labelText}>
            <span className="sr-only">{labelText || labelName}</span>
            <InputSC
                htmlFor={labelName || labelText}
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
            />
        </InputWrapperSC>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    labelName: PropTypes.string,
    labelText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};
Input.defaultProps = {
    className: '',
    labelName: '',
    labelText: '',
    name: 'input',
    type: 'text',
    placeholder: '',
};

export const Textarea = ({
    className,
    labelName,
    labelText,
    name,
    type,
    placeholder,
    ...props
}) => {
    return (
        <TextareaWrapperSC
            className={className}
            htmlFor={labelName || labelText}
        >
            <span className="sr-only">{labelText || labelName}</span>
            <TextareaSC
                as="textarea"
                htmlFor={labelName || labelText}
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
            />
        </TextareaWrapperSC>
    );
};
Textarea.propTypes = {
    className: PropTypes.string,
    labelName: PropTypes.string,
    labelText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};
Textarea.defaultProps = {
    className: '',
    labelName: '',
    labelText: '',
    name: 'input',
    type: 'text',
    placeholder: '',
};
