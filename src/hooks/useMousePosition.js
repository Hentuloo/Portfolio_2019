import { useEffect, useState } from 'react';

export const useMousePosition = () => {
    const [callbacks, setCallbacks] = useState([]);

    const setNewCallback = callback => setCallbacks([...callbacks, callback]);

    useEffect(() => {
        const runCallbacks = e => {
            callbacks.forEach(callback => callback(e));
        };
        document.addEventListener('mousemove', runCallbacks);
        return () => {
            document.removeEventListener('mousemove', runCallbacks);
        };
    }, [callbacks]);

    return setNewCallback;
};
