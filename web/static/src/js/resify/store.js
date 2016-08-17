import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducer from './rootReducer';


const middleware = applyMiddleware(promise(), logger());

const store = createStore(reducer, window._sharedData, middleware);

export default store;