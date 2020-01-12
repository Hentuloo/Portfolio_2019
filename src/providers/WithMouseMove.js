import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gsap, Power1 } from 'gsap';
import { useMousePosition } from 'hooks/useMousePosition';

export const WithMouseMoveWrapper = styled.div`
    contain: layout style size;
    pointer-events: none;
    will-change: transform;
`;

export const WithMouseMove = ({ render, attr, gsapAttr, gsapDelay }) => {
    const elementRef = useRef(null);
    const setNewCallback = useMousePosition();

    useEffect(() => {
        if (window.innerWidth <= 755) return;
        const { sensitivity = 1, x = 0, y = 0 } = attr;
        setNewCallback(({ clientX, clientY }) => {
            gsap.to(elementRef.current, gsapDelay, {
                x: clientX * sensitivity + x,
                y: clientY * sensitivity + y,
                ease: Power1.ease,
                ...gsapAttr,
            });
        });
    }, []);

    return (
        <WithMouseMoveWrapper ref={elementRef}>{render()}</WithMouseMoveWrapper>
    );
};

WithMouseMove.propTypes = {
    render: PropTypes.func.isRequired,
    attr: PropTypes.shape({
        sensitivity: PropTypes.number,
        x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    gsapAttr: PropTypes.objectOf(Object),
    gsapDelay: PropTypes.number,
};

WithMouseMove.defaultProps = {
    attr: {
        sensitivity: 1,
        x: 0,
        y: 0,
    },
    gsapAttr: {},
    gsapDelay: 0.1,
};
