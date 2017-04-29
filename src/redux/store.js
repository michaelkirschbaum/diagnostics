import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';
import {persistStore, autoRehydrate} from 'redux-persist';

import middleware from './middleware';
import reducer from './reducer';

import {composeWithDevTools} from 'remote-redux-devtools';

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
  reduxLoop.install(),
  autoRehydrate()
);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
