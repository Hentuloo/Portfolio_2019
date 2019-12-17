import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const createStore = () => reduxCreateStore(rootReducer, composeWithDevTools());
export default createStore;
