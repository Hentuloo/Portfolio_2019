import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import VerticalMenu from './vertical/VerticalMenu';
import HorizontalMenu from './horizontal/HorizontalMenu';

storiesOf('organism/menu', module)
    .add('vertical', () => (
        <VerticalMenu {...{ pdfEng: { url: 'sth' }, pdf: { url: 'sth' } }} />
    ))
    .add('horizontal', () => <HorizontalMenu />);
