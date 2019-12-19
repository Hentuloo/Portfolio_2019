import { useContext } from 'react';
import CursorPosition from 'context/CursorPosition';

export const useMouseEffect = () => {
    const {
        position: { x, y },
    } = useContext(CursorPosition);

    const getMove = (props = {}) => {
        const xPosition = `calc(${x}px + ${props.x || '0px'} )`;
        const yPosition = `calc(${y}px + ${props.y || '0px'} )`;

        const scaleX =
            props.scaleX !== undefined ? `scaleX(${props.scaleX || 1})` : '';
        const scaleY =
            props.scaleX !== undefined ? `scaleY(${props.scaleY || 1})` : '';
        const scale =
            props.scale !== undefined ? `scale(${props.scaleY || 1})` : '';

        return {
            style: {
                transform: `translate(${xPosition} , ${yPosition}) ${scale} ${scaleX} ${scaleY}`,
            },
        };
    };

    const getMoveOnHover = props => {
        const moveElement = (moveProps = { sensitivity: 0.5 }, element) => {
            const rect = element.target.getBoundingClientRect();
            const xInElement = element.clientX - rect.left; // x position within the element.
            const yInElement = element.clientY - rect.top; // y position within the element.

            const xPosition = `calc(${xInElement *
                moveProps.sensitivity}px + ${moveProps.x || '0px'})`;
            const yPosition = `calc(${yInElement *
                moveProps.sensitivity}px + ${moveProps.y || '0px'})`;
            element.target.style.transform = `translate(${xPosition} , ${yPosition})`;
        };
        const resetElement = element => {
            element.target.style.transform = `translate(0px , 0px)`;
        };

        return {
            onMouseMove: e => moveElement(props, e),
            onMouseLeave: e => resetElement(e),
            onBlur: e => resetElement(e),
        };
    };

    return {
        position: { x, y },
        getMove,
        getMoveOnHover,
    };
};
