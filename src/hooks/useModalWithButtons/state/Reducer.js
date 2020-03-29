import types from './types';

const reducer = (state, action) => {
    switch (action.type) {
        case types.NEW_ACTIVE: {
            const { active, withAnim, updateOrder } = action.payload;
            return {
                ...state,
                active,
                withAnim,
                updateOrder,
            };
        }
        case types.SET_BUTTONS_ORDER: {
            return { ...state, btnsOrder: action.payload };
        }
        default:
            return state;
    }
};
export default reducer;
