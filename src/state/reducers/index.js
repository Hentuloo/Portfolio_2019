import { combineReducers } from 'redux';
import language from './language';
import cursor from './cursor';

export default combineReducers({
    language,
    cursor,
});
