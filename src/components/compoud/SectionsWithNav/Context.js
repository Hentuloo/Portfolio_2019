import { createContext } from 'react';

export default createContext({
    active: 0,
    // eslint-disable-next-line no-unused-vars
    onChange: newIndex => null,
    addButtonIndex: () => null,
    LastButtonIndex: 0,
});
