import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from './Markdown';

const mockMarkdown = String(
    '{\n   \'In daily work i use\': [\n["HTML", "CSS", "JS"],\n["SASS", "SCSS", "Styled-components", "Bootstrap4", "BEM"],\n["REACT", "REDUX", "Gatsby", "GIT", "Webpack"],\n["Node.js", "Express", "MongoDB"],\n["Eslint", "Prettier", "Husky + lintStage", "Story-book"],\n["GraphCMS", "Netlify", "Heroku"],\n["GIMP", "Gravit Designer(Page design)", "Canva.com", "Figma"]\n],\n   \'I know a little bit\': [\n["MySQL", "GraphQL" ],\n["PHP", "jQuery", "HTML5:Canvas" ],\n["WordPress"]\n],\n   \'Supplement\': [\n`Technologies of type: ["PHP", "jQuery"] don\'t have place in the following projects`,\n\'I studied them at school\',\n\'and they appear only to be a solid foundations for further learning\',\n]\n}\n',
);
storiesOf('molecules/', module).add('Markdown', () => (
    <Markdown markdown={mockMarkdown} />
));
