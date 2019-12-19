import React from 'react';
import PropTypes from 'prop-types';

import CursorPosition from 'context/CursorPosition';
import { useMousePosition } from 'hooks/useMousePosition';

const WithCursorProvider = ({ children }) => {
    const { x, y } = useMousePosition();

    const CursorContextValue = {
        position: {
            x,
            y,
        },
    };

    return (
        <CursorPosition.Provider value={CursorContextValue}>
            {children}
        </CursorPosition.Provider>
    );
};

WithCursorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WithCursorProvider;
