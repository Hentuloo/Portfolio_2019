import types from './types';

export const changeActive = (newActive, triggerAnim, updateOrder = true) => ({
    type: types.NEW_ACTIVE,
    payload: {
        active: newActive,
        withAnim: triggerAnim,
        updateOrder,
    },
});

export const setNewButtonsOrder = order => ({
    type: types.SET_BUTTONS_ORDER,
    payload: order,
});
