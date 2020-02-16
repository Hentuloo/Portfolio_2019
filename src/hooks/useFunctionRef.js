import { useState, useMemo } from 'react';

export const useFunctionRef = () => {
    const [fn, setFn] = useState(null);

    const dispacher = useMemo(
        () => () => {
            if (fn === null) {
                return newFn => {
                    if (newFn) {
                        setFn(() => newFn);
                    }
                };
            }
            return fn;
        },
        [fn],
    );

    return dispacher();
};
