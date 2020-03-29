import { useReducer, useCallback } from 'react';

export const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const thunkedDispatch = useCallback(action => {
        // eslint-disable-next-line no-unused-expressions
        typeof action === 'function' ? action(dispatch) : dispatch(action);
    }, []);

    return [state, thunkedDispatch];
};
