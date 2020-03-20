import { createContext } from 'react';

export const Context = createContext({
    active: 0,
    prevActive: 0,
    changeActive: () => null,
    rerender: () => null,
    rerenderDeps: 0,
    triggerInitAnimation: () => null,
    setInitAnimation: () => null,
});
