import { pagesActions } from 'state/actions/pagesActions';

const initState = {
    refs: {
        portfolio: '.PortfolioPage',
        projects: '.ProjectsPage',
        contact: '.PageWrapper',
    },
    onChangeCallbacks: [],
    entryPage: 'portfolio',
    entryPageLoaded: false,
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
        case pagesActions.ENTRY_PAGE_LOADED:
            return {
                ...state,
                entryPageLoaded: action.payload,
            };
        default:
            return state;
    }
};
