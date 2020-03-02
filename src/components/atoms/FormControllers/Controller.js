/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const ValidMessageSC = styled.span`
    position: absolute;
    right: 12px;
    top: 0%;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.xxxs};
    color: ${({ theme }) => theme.color.gray[2]};
    transform: translateY(-50%);
    opacity: 0;
`;

export const WrapperSC = styled.label`
    position: relative;
    display: flex;
    width: 80%;
    margin: 0px auto;
    cursor: none;
    &::after {
        position: absolute;
        content: '';
        width: 85%;
        height: 2px;
        bottom: 0%;
        left: 18px;
        background-color: ${({ theme }) => theme.color.gray[0]};
    }
    ${({ isInvalid }) =>
        isInvalid === true &&
        css`
            ${ValidMessageSC} {
                opacity: 1;
                color: ${({ theme }) => theme.color.brand[1]};
            }
        `};
`;

export const ControllerSC = styled.input`
    order: -1;
    width: 100%;
    min-height: 40px;
    padding: 5px 10px 6px 18px;
    border: none;
    font-size: ${({ theme }) => theme.font.m};
    font-family: ${({ theme }) => theme.font.second};
    cursor: none;
    outline: none;
    color: ${({ theme }) => theme.color.black[0]};
    &:focus + ${ValidMessageSC} {
        opacity: 1;
    }
    &::placeholder {
        color: ${({ theme }) => theme.color.black[0]};
    }
`;

const Controller = ({
    className,
    labelName,
    labelText,
    name,
    type,
    placeholder,
    validationMessage,
    isInvalid,
    controllerAS,
    ...props
}) => {
    return (
        <WrapperSC
            isInvalid={isInvalid}
            className={className}
            htmlFor={labelName || labelText}
        >
            <span className="sr-only">{labelText || labelName}</span>
            <ControllerSC
                htmlFor={labelName || labelText}
                type={type}
                name={name}
                placeholder={placeholder}
                as={controllerAS}
                {...props}
            />
            {validationMessage && (
                <ValidMessageSC>
                    {validationMessage}
                    <span className="sr-only"> Jest zwalidowane</span>
                </ValidMessageSC>
            )}
        </WrapperSC>
    );
};

Controller.propTypes = {
    className: PropTypes.string,
    labelName: PropTypes.string,
    labelText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    validationMessage: PropTypes.string,
    isInvalid: PropTypes.bool,
    controllerAS: PropTypes.string,
};
Controller.defaultProps = {
    className: '',
    labelName: '',
    labelText: '',
    name: 'input',
    type: 'text',
    placeholder: '',
    validationMessage: '',
    isInvalid: false,
    controllerAS: 'input',
};
export default Controller;
