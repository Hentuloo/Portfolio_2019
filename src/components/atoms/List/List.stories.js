import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import List from './List';

const StyledList = styled(List)`
    width: 100vw;
    height: 160px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 200px;
        height: 100vh;
    }
`;

storiesOf('atoms/List', module).add('primary', () => (
    <StyledList>
        <>
            <li>Siema</li>
            <li>Siema</li>
            <li>Siema</li>
            <li>Siema</li>
            <li>Siema</li>
        </>
    </StyledList>
));
