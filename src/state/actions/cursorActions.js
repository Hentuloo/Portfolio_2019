export const cursorActions = {
    CHANGE_MOOD: 'CHANGE_MOOD',
};

export const changeMood = mood => {
    return { type: cursorActions.CHANGE_MOOD, payload: mood };
};
