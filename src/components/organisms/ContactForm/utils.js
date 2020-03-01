import validator from 'validator';

export const isValid = (name, value) => {
    if (value === '') return true;
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

export const sendNetilfyForm = values =>
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({ 'form-name': 'contact', ...values }),
    });
