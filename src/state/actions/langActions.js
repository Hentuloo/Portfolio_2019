export const langActions = {
    CHANGE_LANG: 'CHANGE_LANG',
};

export const changeLanguage = lang => {
    return { type: langActions.CHANGE_LANG, payload: lang };
};
