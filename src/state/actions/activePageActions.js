export const activePageActions = {
    CHANGE_PAGE: 'CHANGE_PAGE',
};

export const changePage = pageName => {
    return { type: activePageActions.CHANGE_PAGE, payload: pageName };
};
