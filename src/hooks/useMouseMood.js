import { useDispatch } from 'react-redux';
import { changeMood } from 'state/actions/cursorActions';

export const useMouseMood = () => {
    const dispatch = useDispatch();

    const changeCursorMode = mood => {
        dispatch(changeMood(mood));
    };

    const toggleMoodOnHover = (props = { initialMood: 'normal' }) => {
        if (props.mood) {
            return {
                onMouseEnter: () => changeCursorMode(props.mood),
                onClick: () => changeCursorMode(props.mood),
                onMouseLeave: () => changeCursorMode(props.initialMood),
                onBlur: () => changeCursorMode(props.initialMood),
            };
        }
        throw new Error('I need mood name');
    };

    // const getCustomMove = (props = {}) => ({});

    return { toggleMoodOnHover };
};
