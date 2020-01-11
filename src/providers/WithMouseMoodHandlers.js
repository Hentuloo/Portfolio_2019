import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeMood } from 'state/actions/cursorActions';

const WithMouseMoodHandlers = ({ render, mood, initialMood }) => {
    const dispatch = useDispatch();

    const changeCursorMode = (e, moodName) => {
        if (window.innerWidth <= 755) return e.preventDefault();
        dispatch(changeMood(moodName));
        return null;
    };

    const listeners = {
        onKeyUp: e => changeCursorMode(e, initialMood),
        onMouseEnter: e => changeCursorMode(e, mood),
        onMouseDown: e => changeCursorMode(e, mood),
        onMouseLeave: e => changeCursorMode(e, initialMood),
        onBlur: e => changeCursorMode(e, initialMood),
    };

    return render({ getHandlers: listeners });
};

WithMouseMoodHandlers.propTypes = {
    render: PropTypes.func.isRequired,
    mood: PropTypes.string,
    initialMood: PropTypes.string,
};
WithMouseMoodHandlers.defaultProps = {
    mood: '',
    initialMood: '',
};

export default WithMouseMoodHandlers;
