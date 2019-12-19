import { useContext } from 'react';
import CursorPosition from 'context/CursorPosition';

export const useMouseEffects = () => {
    const {
        position: { x, y },
    } = useContext(CursorPosition);

    const getMove = (props = {}) => {
        const xPosition = `calc(${x}px + ${props.x || '0px'} )`;
        const yPosition = `calc(${y}px + ${props.y || '0px'} )`;

        return {
            style: {
                transform: `translate(${xPosition} , ${yPosition})`,
            },
        };
    };

    // const getCustomMove = (props = {}) => ({});

    return { position: { x, y }, getMove };
};
