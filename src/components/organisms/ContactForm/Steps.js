import React from 'react';
import styled from 'styled-components';

import { Input, Textarea } from 'components/atoms';

const Wrapper = styled.div`
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
`;
const StyledInput = styled(Input)`
    margin: 5px auto 5px;
`;
const StyledTextarea = styled(Textarea)`
    margin: 10px auto 5px;
`;

const Steps = () => {
    return (
        <Wrapper autocomplete="false" onSubmit={() => {}}>
            <Title>Kontakt</Title>
            <SubTitle>
                Aktualnie poszukuję pracy na stanowisku Junior Web, napisz a ja
                spróbuje pomóc
            </SubTitle>
            <StyledInput
                labelName="inputName"
                labelText="Wpisz swoje imię"
                name="pName"
                placeholder="Twoje imię:"
            />
            <StyledInput
                labelName="inputEmail"
                labelText="Wpisz swój email"
                name="pEmail"
                placeholder="Twój email:"
            />
            <StyledTextarea
                labelName="inputMessage"
                labelText="Wpisz swoją wiadomość"
                name="pMessage"
                placeholder="W czym mogę Ci pomóc?"
            />
            <SubTitle>
                Aktualnie poszukuję pracy na stanowisku Junior Web, napisz a ja
                spróbuje pomóc
            </SubTitle>
            <SubTitle>
                Aktualnie poszukuję pracy na stanowisku Junior Web, napisz a ja
                spróbuje pomóc
            </SubTitle>
            <SubTitle>
                Aktualnie poszukuję pracy na stanowisku Junior Web, napisz a ja
                spróbuje pomóc
            </SubTitle>
        </Wrapper>
    );
};

export default Steps;
