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

    // const getCustomMove = (props = {}) => ({});

    return { position: { x, y }, getMove };
};
