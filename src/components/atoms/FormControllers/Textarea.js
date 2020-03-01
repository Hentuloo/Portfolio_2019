import React from 'react';
import styled from 'styled-components';
import Controller, { ControllerSC, ValidMessageSC } from './Controller';

const StyledController = styled(Controller)`
    width: calc(80% - 20px);
    background-color: ${({ theme }) => theme.color.gray[5]};

    &::after {
        display: none;
    }

    ${ValidMessageSC} {
        transform: translateY(-100%);
    }

    ${ControllerSC} {
        min-height: 70px;
        padding: 4px 10px 6px 12px;
        font-size: ${({ theme }) => theme.font.s};
        background-color: transparent;
    }
`;

export const Textarea = props => (
    <StyledController controllerAS="textarea" {...props} />
);
