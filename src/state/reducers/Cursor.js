import { cursorActions } from 'state/actions/cursorActions';

const initState = {
    mood: 'normal',
};

export default (state = initState, action) => {
    switch (action.type) {
        case cursorActions.CHANGE_MOOD:
            return { ...state, mood: action.payload };
        default:
            return state;
    }
};
