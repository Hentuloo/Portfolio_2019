import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TweenLite, Power1 } from 'gsap';

export const WithMouseHover = ({ render, attr, gsapAttr, gsapDelay }) => {
    const moveElement = useMemo(
        () => e => {
            const { target, clientX, clientY } = e;
            const rect = target.getBoundingClientRect();

            const xInElement = clientX - rect.left; // x position within the element.
            const yInElement = clientY - rect.top; // y position within the element.

            const { sensitivity = 1, x = 0, y = 0 } = attr;
            TweenLite.to(e.target, gsapDelay, {
                x: xInElement * sensitivity + x,
                y: yInElement * sensitivity + y,
                ease: Power1.ease,
                ...gsapAttr,
            });
        },
        [],
    );

    const resetElement = useMemo(() => e => {
        TweenLite.to(e.target, gsapDelay, {
            x: 0,
            y: 0,
            ease: Power1.ease,
        });
    });

    const listeners = {
        onMouseMove: moveElement,
        onMouseLeave: resetElement,
        onBlur: resetElement,
    };

    return render({ listeners });
};

WithMouseHover.propTypes = {
    render: PropTypes.func.isRequired,
    attr: PropTypes.shape({
        sensitivity: PropTypes.number,
        x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    gsapAttr: PropTypes.objectOf(Object),
    gsapDelay: PropTypes.number,
};

WithMouseHover.defaultProps = {
    attr: {
        sensitivity: 1,
        x: 0,
        y: 0,
    },
    gsapAttr: {},
    gsapDelay: 0.1,
};
