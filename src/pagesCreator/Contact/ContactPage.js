import React, { memo } from 'react';
import styled from 'styled-components';

import { ContactForm } from 'components/organisms';
import TreeImage from './TreeImage';

const Wrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        display: grid;
        width: 94%;
        max-width: 1010px;
        height: 70vh;
        max-height: 500px;
        grid-template-columns: 1fr 355px;
        column-gap: 50px;
        margin: 20vh auto 0px;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        transform: translateX(-10%);
    }
`;

const ContactTemplate = () => (
    <Wrapper>
        <TreeImage />
        <ContactForm />
    </Wrapper>
);

export default memo(ContactTemplate, () => true);
