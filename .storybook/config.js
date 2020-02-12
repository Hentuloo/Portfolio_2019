import '@openfonts/baloo-tamma_latin-ext';
import '@openfonts/roboto_latin-ext';
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

//Styled components
import { theme } from '../src/themes/mainTheme';
import { ThemeProvider } from 'styled-components';

//Redux
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../src/state/createStore';
const store = createStore();

const req = require.context('../src/components/', true, /stories\.js$/);

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(story => (
    <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </ReduxProvider>
));

addDecorator(withKnobs);
configure(loadStories, module);
