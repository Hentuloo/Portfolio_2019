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
