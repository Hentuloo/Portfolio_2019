import { combineReducers } from 'redux';
import Lang from './Lang';
import ActivePage from './ActivePage';
import Cursor from './Cursor';

export default combineReducers({
    Lang,
    ActivePage,
    Cursor,
});
