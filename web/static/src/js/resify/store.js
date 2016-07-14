import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducer from './rootReducer';

const middleware = applyMiddleware(logger());

export default createStore(reducer, middleware);