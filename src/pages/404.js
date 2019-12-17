import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeLanguage } from 'state/actions/langActions';
import { changePage } from 'state/actions/activePageActions';

import App from 'pages/index';

import Constants from 'config/Constants';

const ErrorRedirect = () => {
    const dispatch = useDispatch();

    const [similarRoute, setSimilarRoute] = useState(false);

    const choosePage = (lang, subPage) => {
        window.history.pushState(null, null, `/${lang}/${subPage}`);
        dispatch(changePage(subPage));
        dispatch(changeLanguage(lang));
        setSimilarRoute(true);
    };

    useEffect(() => {
        // get all languages from Constants
        const allLanguages = Object.keys(Constants);
        const partsUrl = window.location.pathname.split('/');

        // find similar part to allLanguages shortcuts
        const currentLang = allLanguages.find(language => {
            return partsUrl.find(part => part.includes(language));
        });

        if (currentLang) {
            // find similar page path
            const allValues = Object.values(Constants[currentLang].PATHS);
            const allKeys = Object.keys(Constants[currentLang].PATHS);
            const currentPageIndex = allValues.findIndex(path => {
                return partsUrl.find(part => part.includes(path));
            });

            if (currentPageIndex !== -1) {
                choosePage(currentLang, allKeys[currentPageIndex]);
            } else {
                choosePage(currentLang, allKeys[1]);
            }
        } else {
            const allEngPaths = Object.keys(Constants.en.PATHS);
            const currentPage = allEngPaths.find(path => {
                return partsUrl.find(part => part.includes(path));
            });

            if (currentPage) {
                choosePage('en', currentPage);
                return;
            }
            // Find by browser language
            const userLang = navigator.language || navigator.userLanguage;
            if (userLang === 'pl-PL') {
                choosePage('pl', 'portfolio');
                return;
            }
            choosePage('en', 'portfolio');
        }
    }, []);

    if (similarRoute) {
        return <App />;
    }
    return null;
};

export default ErrorRedirect;
