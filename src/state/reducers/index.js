import { combineReducers } from 'redux';
import language from './language';
import ActivePage from './ActivePage';
import cursor from './cursor';

export default combineReducers({
    language,
    ActivePage,
    cursor,
});
