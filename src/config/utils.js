import { usePolandApi } from 'api/pl';
import { useEnglishApi } from 'api/en';

export const getDataByLanguage = lang => {
    if (lang === 'pl') {
        return usePolandApi();
    }
    return useEnglishApi();
};

export const encode = data => {
    return Object.keys(data)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
};
