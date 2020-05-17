import Constants from './Constants';

export const promisWithMinimumTime = (time, promise) => {
    const minTimePromise = () =>
        new Promise(resolve => setTimeout(resolve, time));
    return Promise.all([minTimePromise(), promise]);
};
export const getGraphcmsImg = ({ handle }, maxSize) => {
    if (!handle) return Error('handle is required');
    if (maxSize) {
        return `https://media.graphcms.com/resize=w:${maxSize},fit:crop/output=format:webp/compress/${handle}`;
    }
    return `https://media.graphcms.com/${handle}`;
};

export const getViewNameByUrl = () => {
    // get all languages from Constants

    const partsUrl = window.location.pathname.split('/');
    const languages = Object.keys(Constants).filter(
        lng => Constants[lng].PATHS,
    );

    const [values, keys] = languages.reduce(
        (acc, lng) => [
            [...acc[0], ...Object.values(Constants[lng].PATHS)],
            [...acc[1], ...Object.keys(Constants[lng].PATHS)],
        ],
        [[], []],
    );

    const intersection = values.findIndex(e => partsUrl.indexOf(e) !== -1);

    return keys[intersection] || 'portfolio';
};
