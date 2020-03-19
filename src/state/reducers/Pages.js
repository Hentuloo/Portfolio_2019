import { pagesActions } from 'state/actions/pagesActions';

const initState = {
    refs: { portfolio: null, projects: null, contact: null },
    onChangeCallbacks: [],
    entryPage: 'portfolio',
};

export default (state = initState, action) => {
    switch (action.type) {
        case pagesActions.SET_ENTRY_PAGE:
            return {
                ...state,
                entryPage: action.payload,
            };
        case pagesActions.SET_PAGES_REFS:
            return {
                ...state,
                refs: action.payload,
            };
        case pagesActions.ADD_CALLBACK:
            return {
                ...state,
                onChangeCallbacks: [...state.onChangeCallbacks, action.payload],
            };
        default:
            return state;
    }
};
