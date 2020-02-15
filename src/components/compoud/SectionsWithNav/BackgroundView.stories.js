import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { ParagraphTitle, Paragraph } from 'components/atoms';

import { mountain, graph, box, joystic } from 'images/projectsWindowIcons';
import * as SWN from './index';

const ImageWrapper = styled.div``;
const IconImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

storiesOf('cmp', module).add('compile', () => (
    <SWN.Wrapper>
        <SWN.Button>
            <ImageWrapper>
                <IconImage src={mountain} />
            </ImageWrapper>
        </SWN.Button>
        <SWN.Button>
            <ImageWrapper>
                <IconImage src={graph} />
            </ImageWrapper>
        </SWN.Button>
        <SWN.Button>
            <ImageWrapper>
                <IconImage src={box} />
            </ImageWrapper>
        </SWN.Button>
        <SWN.Button>
            <ImageWrapper>
                <IconImage src={joystic} />
            </ImageWrapper>
        </SWN.Button>

        <SWN.Section>
            <ParagraphTitle>Front-end</ParagraphTitle>
            <Paragraph>
                HTML, CSS, JS, SASS, SCSS, Styled-components, BEM, Bootstrap4,
                React + hooks, Redux, Gatsby, GIT, Webpack React testing
                library, Jest, TDD, Story-book, GSAP, SVG
            </Paragraph>
            <Paragraph as="h4" asTitle>
                Troche znam:
            </Paragraph>
            <Paragraph>HTML5:Canvas, Bulma, GraphQL, jQuery</Paragraph>
        </SWN.Section>
        <SWN.Section>
            <ParagraphTitle>Back-end</ParagraphTitle>
            <Paragraph>
                Node.js, Express, MongoDB, Firestore, Firebase, Cloud-functions,
            </Paragraph>
            <Paragraph as="h4" asTitle>
                Troche znam:
            </Paragraph>
            <Paragraph>TypeScript, PHP, MySQL</Paragraph>
        </SWN.Section>
        <SWN.Section>
            <ParagraphTitle>Inne</ParagraphTitle>
            <Paragraph>
                Eslint, Prettier, Husky + lintStage Netlify, Heroku, Figma,
                GIMP, Canva.com Gravit Designer, Angielski B1
            </Paragraph>
            <Paragraph as="h4" asTitle>
                Troche znam:
            </Paragraph>
            <Paragraph>WordPress</Paragraph>
        </SWN.Section>
        <SWN.Section>
            <ParagraphTitle>Teraz/niedługo:</ParagraphTitle>
            <Paragraph>
                Przerabiam kurs “średnio zawansowany Gatsby”, Złożona animacja z
                wykorzystaniem GSAP, Stworzyć coś w React-Native (wyłącznie
                praca z dokumentacją) W marcu nowe kursy na Front-end masters!
            </Paragraph>
        </SWN.Section>
    </SWN.Wrapper>
));
