import styled, { keyframes, css } from 'styled-components';
import { Input, general } from 'components/atoms';

export const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;

export const Wrapper = styled.section`
    width: 84%;
    max-width: 700px;
    margin: 0px 8%;
    padding: 0px 20px 0px;
    background: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    border-radius: 7px;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        margin: 0px auto;
        background: transparent;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        max-width: 900px;
    }

    ${({ success }) =>
        !success &&
        css`
            opacity: 0;
            animation: ${opacity} 0.5s linear forwards;
        `}
`;
export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    min-height: 70vh;
    margin: 60px 0px 100px 0px;
    padding: 20px 0px;
    flex-direction: column;
    justify-content: space-around;
    color: black;
    position: relative;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        min-height: 80vh;
        margin: 30px 0px 100px 0px;
    }
`;

export const Message = styled.h3`
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

export const InputName = styled(Input)`
    background-color: ${({ theme }) => theme.redThird};
`;

export const InputEmail = styled(Input)`
    background-color: ${({ theme }) => theme.graySecond};
    &:valid {
        background-color: ${({ theme }) => theme.graySecond};
    }
`;

export const Textarea = styled.textarea`
    ${general}
    padding-top: 18px;
    line-height: ${({ theme }) => theme.font.m};
    background-color: ${({ theme }) => theme.graySecond};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        padding-top: 30px;
    }

    && {
        height: 24vh;
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            height: 20vh;
        }
    }
`;

export const InputSubmit = styled(Input)`
    border: 0px;
    padding: 15px 0px;
    background-color: ${({ theme }) => theme.redFirst};
    line-height: ${({ theme }) => theme.font.m};
    text-transform: uppercase;
    pointer-events: all;
    ${({ isValid }) =>
        !isValid &&
        css`
            background-color: transparent;
            border: 1px solid black;
            opacity: 0.4;
        `}
`;

export const LetterIcon = styled.img`
    position: absolute;
    z-index: 0;
    &.large {
        left: -30px;
        bottom: 40%;
        z-index: 0;
        transition: translate 0.6s ease-out;
    }
    &.first {
        right: -30px;
        top: 55%;
        z-index: 3;
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.3);
        }
    }
    &.second {
        left: 50%;
        bottom: 90%;
        transform: translate(-50%, 0%);
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            display: none;
        }
    }
    &.valid {
        left: 80%;
        bottom: 6px;
        transform: translate(-50%, -0%);
        box-sizing: border-box;
        z-index: 3;
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            bottom: -15px;
            padding: 40px;
            left: 70%;
            border-radius: 50%;
            transition: transform 0.1s ease-in-out;
        }
    }
`;
