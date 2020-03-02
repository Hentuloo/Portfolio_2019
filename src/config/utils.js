export const promisWithMinimumTime = async (time, promise) => {
    const minTimePromise = () =>
        new Promise(resolve => setTimeout(resolve, time));
    const [resp] = await Promise.all([promise, minTimePromise()]);
    return resp;
};
