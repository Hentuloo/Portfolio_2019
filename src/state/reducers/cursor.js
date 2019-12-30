import { cursorActions } from 'state/actions/cursorActions';

export default (state = 'normal', action) => {
    switch (action.type) {
        case cursorActions.CHANGE_MOOD:
            return action.payload;
        default:
            return state;
    }
};
