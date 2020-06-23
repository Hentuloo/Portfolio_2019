import validator from 'validator';
import Constants from 'config/Constants';

export const isValid = (name, value) => {
    if (value === '') return null;
    let validStatus = true;
    switch (name) {
        case 'pName':
            if (!validator.isLength(value, { min: 6, max: 30 })) {
                validStatus = false;
            }
            break;
        case 'pEmail':
            if (!validator.isEmail(value)) {
                validStatus = false;
            }
            break;
        case 'pMessage':
            if (!validator.isLength(value, { min: 10, max: 200 })) {
                validStatus = false;
            }
            break;

        default:
            throw new Error('invalid name');
    }
    return validStatus;
};

export const encode = data => {
    return Object.keys(data)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
};

export const sendEmailToBrand = values => {
    return fetch(Constants.GENERAL.emailUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({ 'form-name': 'contact', ...values }),
    });
};

export const mergeInputObjects = (state, key, value) => {
    return {
        ...state,
        [key]: {
            ...state[key],
            ...value,
        },
    };
};

export const inputsStateToObjectWithValues = state => {
    return Object.keys(state).reduce((acc, key) => {
        acc[key] = state[key].value;
        return acc;
    }, {});
};
export const inputsValidation = state => {
    let valid = { ok: true, fieldName: null };

    Object.keys(state).some(key => {
        if (!isValid(key, state[key].value)) {
            valid = { ok: false, fieldName: key };
            return true;
        }
        return false;
    });

    return valid;
};
