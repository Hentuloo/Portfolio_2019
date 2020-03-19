import { combineReducers } from 'redux';
import language from './language';
import Pages from './Pages';
import cursor from './cursor';

export default combineReducers({
    language,
    Pages,
    cursor,
});
