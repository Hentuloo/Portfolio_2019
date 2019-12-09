import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Square from './Square';
import SquarePhrase from './SquarePhrase';
import ShadowPhrase from './ShadowPhrase';

const StyledSquarePhrase = styled(Square)`
    ${SquarePhrase}
`;
const StyledShadowPhrase = styled.div`
    ${ShadowPhrase}
`;

const BackgroundPhrase = ({ phrase }) => {
    return (
        <>
            <StyledShadowPhrase phrase={phrase} />
            <StyledSquarePhrase phrase={phrase}></StyledSquarePhrase>
        </>
    );
};

BackgroundPhrase.propTypes = {
    phrase: PropTypes.string,
};

BackgroundPhrase.defaultProps = {
    phrase: null,
};

export default BackgroundPhrase;
