import { TimelineLite } from 'gsap';
import Constants from 'config/Constants';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const hidden = { opacity: 0, scaleY: 0 };
const visible = { opacity: 1, delay: 0.25 };

export const hideAllPages = refs => {
    const tl = new TimelineLite();
    Object.values(refs).forEach(page => tl.set(page, hidden));
    return tl;
};
export const showPage = page => {
    const tl = new TimelineLite();
    tl.set(page, { scaleY: 1, zIndex: 1 });
    tl.to(page, 0.3, visible);
    return tl;
};

export const useChangePageUrl = () => {
    const lang = useSelector(({ language }) => language);
    const changeUrl = useCallback(
        pageName => {
            window.history.pushState(
                {},
                null,
                `/${lang}/${Constants[lang].PATHS[pageName]}`,
            );
        },
        [lang],
    );
    return changeUrl;
};

export const useChangePageEffect = () => {
    const { refs, onChangeCallbacks } = useSelector(({ Pages }) => Pages);
    const changeUrl = useChangePageUrl();

    const changePage = useCallback(
        (pageName, forceAnim, withCallbacks) => {
            if (!pageName) return null;

            const change = () => {
                window.scrollTo(0, 0);
                if (withCallbacks)
                    onChangeCallbacks.forEach(cb => {
                        cb(pageName);
                    });
                changeUrl(pageName);
            };

            if (forceAnim) {
                const tl = new TimelineLite();

                tl.add(hideAllPages(refs)).add(showPage(refs[pageName]));
                change();

                return tl;
            }
            change();
            return null;
        },
        [refs, onChangeCallbacks.length],
    );

    return changePage;
};
export const useSetPage = () => {
    const { refs } = useSelector(({ Pages }) => Pages);

    const fn = useCallback((pageName, specialRefs) => {
        const rf = specialRefs || refs;
        hideAllPages(rf);
        showPage(rf[pageName]);
        window.scrollTo(0, 0);
    }, []);

    return fn;
};
