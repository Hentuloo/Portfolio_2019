import React from 'react';
import PropTypes from 'prop-types';

import SquareWithPhrase from './SquareWithPhrase';
import ShadowWithPhrase from './ShadowWithPhrase';

const BackgroundPhrase = ({ children, white, gray }) => {
    return (
        <div role="presentation">
            <ShadowWithPhrase>{children || gray}</ShadowWithPhrase>
            <SquareWithPhrase>{children || white}</SquareWithPhrase>
        </div>
    );
};

BackgroundPhrase.propTypes = {
    children: PropTypes.node,
    white: PropTypes.node,
    gray: PropTypes.node,
};
BackgroundPhrase.defaultProps = {
    children: null,
    white: null,
    gray: null,
};

export default BackgroundPhrase;
