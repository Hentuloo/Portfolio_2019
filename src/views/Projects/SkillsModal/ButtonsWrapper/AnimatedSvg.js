import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    svg {
        position: absolute;
        max-width: 80%;
        max-height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const AnimatedSvg = ({ Component, paused }) => (
    <ImageWrapper>
        <Component
            tlSettings={{
                paused,
            }}
        />
    </ImageWrapper>
);
AnimatedSvg.propTypes = {
    Component: PropTypes.func.isRequired,
    paused: PropTypes.bool.isRequired,
};

export default AnimatedSvg;
