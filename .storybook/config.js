import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { theme } from '../src/themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import langContext from '../src/context/langContext';
import pageContext from '../src/context/pageContext';

const req = require.context('../src/components/', true, /stories\.js$/);

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(story => (
    <ThemeProvider theme={theme}>
        <pageContext.Provider
            value={{
                previousPage: 'portfolio',
                currentPage: 'portfolio',
                onChangePage: () => {},
            }}
        >
            <langContext.Provider value={'en'}>{story()}</langContext.Provider>
        </pageContext.Provider>
    </ThemeProvider>
));

addDecorator(withKnobs);
configure(loadStories, module);
