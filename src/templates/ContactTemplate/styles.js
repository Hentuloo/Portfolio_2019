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

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
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
export const InputSubmit = styled(Input)`
    border: 0px;
    background-color: ${({ theme }) => theme.redFirst};
    cursor: none;
    line-height: ${({ theme }) => theme.font.xs};
`;
export const Textarea = styled.textarea`
    ${general}
    background-color: ${({ theme }) => theme.graySecond};
    && {
        height: 18vh;
    }
`;
export const InputEmail = styled(Input)`
    background-color: ${({ theme }) => theme.graySecond};
    &:valid {
        background-color: ${({ theme }) => theme.graySecond};
    }
`;
export const InputName = styled(Input)`
    background-color: ${({ theme }) => theme.redThird};
`;
export const Form = styled.form`
    display: flex;
    width: 100%;
    min-height: 75vh;
    margin: 6vh 0px 100px 0px;
    flex-direction: column;
    justify-content: space-around;
    color: black;
    position: relative;
`;

export const Wrapper = styled.section`
    width: 80%;
    max-width: 700px;
    margin: 20px auto 0px auto;
    ${({ success }) =>
        !success &&
        css`
            opacity: 0;
            animation: ${opacity} 0.5s linear forwards;
        `}
  @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
   max-width: 900px;
  }
`;
