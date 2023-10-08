import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { zooAnimalsReducer } from './reducers.js';
import { rootSaga } from './sagas.js';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const store = createStore(
  combineReducers({
    zooAnimals: zooAnimalsReducer
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default store;
