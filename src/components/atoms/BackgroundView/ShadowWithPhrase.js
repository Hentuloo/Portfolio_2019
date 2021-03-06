import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Centered } from './Centered';

export const ShadowPhraseWrapper = styled.div`
    ${Centered}
`;

export const ShadowPhraseItem = styled.div`
    color: ${({ theme }) => theme.color.gray[0]};

    z-index: -10;
`;

const ShadowWithPhrase = ({ children }) => {
    return (
        <ShadowPhraseWrapper>
            <ShadowPhraseItem>{children}</ShadowPhraseItem>
        </ShadowPhraseWrapper>
    );
};

ShadowWithPhrase.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShadowWithPhrase;
