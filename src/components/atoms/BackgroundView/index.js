import React from 'react';
import PropTypes from 'prop-types';

import SquareWithPhrase from './SquareWithPhrase';
import ShadowWithPhrase from './ShadowWithPhrase';

const BackgroundView = ({ children, white, gray, itemAttr }) => {
    return (
        <div role="presentation">
            <ShadowWithPhrase>
                <div {...itemAttr}>{children || gray}</div>
            </ShadowWithPhrase>
            <SquareWithPhrase>
                <div {...itemAttr}>{children || white}</div>
            </SquareWithPhrase>
        </div>
    );
};

BackgroundView.propTypes = {
    children: PropTypes.node,
    white: PropTypes.node,
    gray: PropTypes.node,
    wrapperAttr: PropTypes.objectOf(PropTypes.object),
    itemAttr: PropTypes.objectOf(PropTypes.object),
};
BackgroundView.defaultProps = {
    children: null,
    white: null,
    gray: null,
    wrapperAttr: {},
    itemAttr: {},
};

export default BackgroundView;
