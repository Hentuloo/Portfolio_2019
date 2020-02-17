import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { SectionsWithNav as SWN } from 'components/compoud';
import {
    ParagraphTitle,
    Paragraph,
    Mountain,
    Charts,
    Box,
    Joystick,
} from 'components/atoms';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 950px;
    margin: 29px auto;
    &::before {
        position: absolute;
        content: '';
        width: 90%;
        height: calc(100% - 70px);
        bottom: 0px;
        left: 50%;
        max-width: 950px;
        transform: translate(-50%, 0%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);

        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            height: calc(100% - 90px);
        }
    }
    ${SWN.ButtonSC} {
        cursor: none;
        outline: none;
    }
`;

const ImageWrapper = styled.div`
    svg {
        position: absolute;
        max-width: 80%;
        max-height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
const StyledSection = styled(SWN.SectionSC)`
    ${Paragraph}:nth-child(3) {
        padding-top: 20px;
    }

    ${Paragraph}:nth-child(4) {
        padding-right: 30px;
    }
`;

const SkilsSwitcher = () => {
    const { current } = useSelector(({ ActivePage }) => ActivePage);

    const CreateSWNButton = (Component, index) => (
        <SWN.Button
            render={({ active }) => (
                <ImageWrapper>
                    <Component tlSettings={{ paused: active !== index }} />
                </ImageWrapper>
            )}
        />
    );

    return (
        <Wrapper>
            <SWN.Wrapper
                triggerInitAnimationDeps={[
                    initAnim => () => {
                        if (current === 'projects') {
                            setTimeout(() => initAnim(), 600);
                        }
                    },
                    [current],
                ]}
            >
                {CreateSWNButton(Mountain, 0)}
                {CreateSWNButton(Charts, 1)}
                {CreateSWNButton(Box, 2)}
                {CreateSWNButton(Joystick, 3)}
                <StyledSection>
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
                </StyledSection>
                <StyledSection>
                    <ParagraphTitle>Back-end</ParagraphTitle>
                    <Paragraph>
                        Node.js, Express, MongoDB, Firestore, Firebase,
                        Cloud-functions,
                    </Paragraph>
                    <Paragraph as="h4" asTitle>
                        Troche znam:
                    </Paragraph>
                    <Paragraph>TypeScript, PHP, MySQL</Paragraph>
                </StyledSection>
                <StyledSection>
                    <ParagraphTitle>Inne</ParagraphTitle>
                    <Paragraph>
                        Eslint, Prettier, Husky + lintStage Netlify, Heroku,
                        Figma, GIMP, Canva.com Gravit Designer, Angielski B1
                    </Paragraph>
                    <Paragraph as="h4" asTitle>
                        Troche znam:
                    </Paragraph>
                    <Paragraph>WordPress</Paragraph>
                </StyledSection>
                <StyledSection>
                    <ParagraphTitle>Teraz/niedługo:</ParagraphTitle>
                    <Paragraph>
                        Przerabiam kurs “średnio zawansowany Gatsby”, Złożona
                        animacja z wykorzystaniem GSAP, Stworzyć coś w
                        React-Native (wyłącznie praca z dokumentacją) W marcu
                        nowe kursy na Front-end masters!
                    </Paragraph>
                </StyledSection>
            </SWN.Wrapper>
        </Wrapper>
    );
};

export default SkilsSwitcher;
