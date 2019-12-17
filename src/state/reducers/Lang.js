import { langActions } from 'state/actions/langActions';

const initState = {
    lang: 'pl',
};

export default (state = initState, action) => {
    switch (action.type) {
        case langActions.CHANGE_LANG:
            return { ...state, lang: action.payload };
        default:
            return state;
    }
};
