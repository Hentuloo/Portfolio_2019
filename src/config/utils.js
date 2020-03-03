export const promisWithMinimumTime = (time, promise) => {
    const minTimePromise = () =>
        new Promise(resolve => setTimeout(resolve, time));
    return Promise.all([minTimePromise(), promise]);
};
