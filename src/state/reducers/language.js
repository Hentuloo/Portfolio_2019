import { langActions } from 'state/actions/langActions';

export default (state = 'pl', action) => {
    switch (action.type) {
        case langActions.CHANGE_LANG:
            return action.payload;
        default:
            return state;
    }
};
