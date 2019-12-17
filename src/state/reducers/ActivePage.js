import { activePageActions } from 'state/actions/activePageActions';

const initState = {
    previous: 'portfolio',
    current: 'portfolio',
};

export default (state = initState, action) => {
    switch (action.type) {
        case activePageActions.CHANGE_PAGE:
            return {
                ...state,
                previous: state.current,
                current: action.payload,
            };
        default:
            return state;
    }
};
