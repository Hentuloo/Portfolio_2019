import React, { useReducer, useState } from 'react';
import { Context } from '../Context';

export const connect = WrapperedComponent => {
    return props => {
        const [paused, setPaused] = useState(true);
        const [rerenderCount, setRerenderCount] = useState(0);
        const [throttledButtons, setThrottledButtons] = useState(null);
        const [{ prevActive, active }, setNewActive] = useReducer(
            (prevS, newActive) => ({
                prevActive: prevS.active,
                active: newActive,
            }),
            {
                prevActive: null,
                active: 0,
            },
        );

        const changeActive = newActive => {
            if (throttledButtons === null) {
                setNewActive(newActive);
                const timeoutId = setTimeout(() => {
                    setThrottledButtons(null);
                }, 800);
                setThrottledButtons(timeoutId);
            }
            return null;
        };

        const contextValue = {
            active,
            prevActive,
            changeActive,
            rerender: () => setRerenderCount(rerenderCount + 1),
            rerenderDeps: rerenderCount,
            buttonsClass: 'SWN-Button',
            paused,
            setPaused,
        };

        return (
            <Context.Provider value={contextValue}>
                <WrapperedComponent {...props} />
            </Context.Provider>
        );
    };
};
