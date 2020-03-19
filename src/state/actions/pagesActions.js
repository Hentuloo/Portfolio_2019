export const pagesActions = {
    SET_ENTRY_PAGE: 'SET_ENTRY_PAGE',
    SET_PAGES_REFS: 'SET_PAGES_REFS',
    ADD_CALLBACK: 'ADD_CALLBACK',
};

export const setPagesRefs = newRefsObject => {
    return { type: pagesActions.SET_PAGES_REFS, payload: newRefsObject };
};
export const setEntryPage = pageName => {
    return { type: pagesActions.SET_ENTRY_PAGE, payload: pageName };
};
export const addCallback = fn => {
    return { type: pagesActions.ADD_CALLBACK, payload: fn };
};
