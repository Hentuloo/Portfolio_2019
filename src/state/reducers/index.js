import { combineReducers } from 'redux';
import { cursorActions } from 'state/actions/cursorActions';
import language from './language';
import ActivePage from './ActivePage';
// import cursor from './cursor';

const cursor = (state = 'normal', action) => {
    switch (action.type) {
        case cursorActions.CHANGE_MOOD:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    language,
    ActivePage,
    cursor,
});
