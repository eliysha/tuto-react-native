import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middlewares = [
  promiseMiddleware()
];
/*
if (__DEV__) {
  middlewares.push(createLogger());
}*/

//const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  applyMiddleware(createLogger())
);

export default store;
//export default enhancers(applyMiddleware(...middlewares))(createStore)(reducers);
