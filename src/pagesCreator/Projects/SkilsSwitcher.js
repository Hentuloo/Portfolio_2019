import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ParagraphTitle, Paragraph } from 'components/atoms';

import sleepingPanda from 'images/sleepingPanda.svg';
import { circlesRightBottom } from 'images/circles';

const Wrapper = styled.div`
    display: grid;
    width: 90%;
    grid-row-gap: 30px;
    margin: 0px auto 60px;
`;
const ButtonsWrapper = styled.div`
    position: relative;
    padding-top: 100px;
    z-index: 2;
`;
const Button = styled.button`
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    border: none;

    &:nth-of-type(1) {
        left: 3%;
        bottom: 0%;
    }
    &:nth-of-type(2) {
        left: 25%;
        bottom: 39%;
    }
    &:nth-of-type(3) {
        right: 25%;
        bottom: 39%;
    }
    &:nth-of-type(4) {
        right: 3%;
        bottom: 0%;
    }
`;
const Section = styled.section`
    position: absolute;
    display: grid;
    opacity: 0;
    overflow: hidden;
    ${Paragraph}:nth-child(3) {
        margin-top: 25px;
    }
`;
const ActiveWindow = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
    padding: 22px 15px 10px;
    margin: 0px auto;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.white[0]};
    box-shadow: 0px 3px 48px rgba(0, 0, 0, 0.35);
    z-index: 1;
    ${({ active }) =>
        active &&
        css`
            ${Section}:nth-child(${active}) {
                opacity: 1;
            }
        `}
`;
const PandaImageWrapper = styled.div`
    position: absolute;
    width: 197px;
    height: 186px;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -83px);
    z-index: -1;
`;
const CirclesImageWrapper = styled.div`
    position: absolute;
    width: 213px;
    height: 174px;
    right: 0%;
    bottom: 0px;
    z-index: -1;
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const SkilsSwitcher = () => {
    const [activeSection, setActiveSection] = useState(0);
    return (
        <Wrapper>
            <ButtonsWrapper>
                <Button type="button" onClick={() => setActiveSection(0)}>
                    1
                </Button>
                <Button type="button" onClick={() => setActiveSection(1)}>
                    2
                </Button>
                <Button type="button" onClick={() => setActiveSection(2)}>
                    3
                </Button>
                <Button type="button" onClick={() => setActiveSection(3)}>
                    4
                </Button>
            </ButtonsWrapper>
            <ActiveWindow active={activeSection + 1}>
                <Section>
                    <ParagraphTitle>Front-end</ParagraphTitle>
                    <Paragraph>
                        HTML, CSS, JS, SASS, SCSS, Styled-components, BEM,
                        Bootstrap4, React + hooks, Redux, Gatsby, GIT, Webpack
                        React testing library, Jest, TDD, Story-book, GSAP, SVG
                    </Paragraph>
                    <Paragraph as="h4" asTitle>
                        Troche znam:
                    </Paragraph>
                    <Paragraph>HTML5:Canvas, Bulma, GraphQL, jQuery</Paragraph>
                </Section>
                <Section>
                    <ParagraphTitle>Back-end</ParagraphTitle>
                    <Paragraph>
                        Node.js, Express, MongoDB, Firestore, Firebase,
                        Cloud-functions,
                    </Paragraph>
                    <Paragraph as="h4" asTitle>
                        Troche znam:
                    </Paragraph>
                    <Paragraph>TypeScript, PHP, MySQL</Paragraph>
                </Section>
                <Section>
                    <ParagraphTitle>Inne</ParagraphTitle>
                    <Paragraph>
                        Eslint, Prettier, Husky + lintStage Netlify, Heroku,
                        Figma, GIMP, Canva.com Gravit Designer, Angielski B1
                    </Paragraph>
                    <Paragraph as="h4" asTitle>
                        Troche znam:
                    </Paragraph>
                    <Paragraph>WordPress</Paragraph>
                </Section>
                <Section>
                    <ParagraphTitle>Teraz/niedługo:</ParagraphTitle>
                    <Paragraph>
                        Przerabiam kurs “średnio zawansowany Gatsby”, Złożona
                        animacja z wykorzystaniem GSAP, Stworzyć coś w
                        React-Native (wyłącznie praca z dokumentacją) W marcu
                        nowe kursy na Front-end masters!
                    </Paragraph>
                </Section>
                <PandaImageWrapper>
                    <Image src={sleepingPanda} />
                </PandaImageWrapper>
                <CirclesImageWrapper>
                    <Image src={circlesRightBottom} />
                </CirclesImageWrapper>
            </ActiveWindow>
        </Wrapper>
    );
};

export default SkilsSwitcher;
