import React from 'react';
import PropTypes from 'prop-types';

import SquareWithPhrase from './SquareWithPhrase';
import ShadowWithPhrase from './ShadowWithPhrase';

const BackgroundPhrase = ({ children, white, gray, wrapperAttr, itemAttr }) => {
    return (
        <div role="presentation" {...wrapperAttr}>
            <ShadowWithPhrase>
                <div {...itemAttr}>{children || gray}</div>
            </ShadowWithPhrase>
            <SquareWithPhrase>
                <div {...itemAttr}>{children || white}</div>
            </SquareWithPhrase>
        </div>
    );
};

BackgroundPhrase.propTypes = {
    children: PropTypes.node,
    white: PropTypes.node,
    gray: PropTypes.node,
    wrapperAttr: PropTypes.objectOf(PropTypes.object),
    itemAttr: PropTypes.objectOf(PropTypes.object),
};
BackgroundPhrase.defaultProps = {
    children: null,
    white: null,
    gray: null,
    wrapperAttr: {},
    itemAttr: {},
};

export default BackgroundPhrase;
