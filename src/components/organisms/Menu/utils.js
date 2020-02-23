import { useCallback } from 'react';
import Constants from 'config/Constants';

import { useDispatch, useSelector } from 'react-redux';
import { changePage } from 'state/actions/activePageActions';

export const useChangePage = () => {
    const dispatch = useDispatch();
    const {
        ActivePage: { current },
        lang,
    } = useSelector(({ ActivePage, language }) => ({
        lang: language,
        ActivePage,
    }));

    const changeFunc = useCallback(
        (e, pageName) => {
            e.preventDefault();
            if (pageName === current) return;
            window.scrollTo(0, 0);
            window.history.pushState(
                {},
                null,
                `/${lang}/${Constants[lang].PATHS[pageName]}`,
            );
            dispatch(changePage(pageName));
        },
        [current],
    );

    return changeFunc;
};
