import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';

import reducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose }
  from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as storage from 'redux-storage'
import { createLogger } from 'redux-logger'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import filter from 'redux-storage-decorator-filter'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

function configureStore(initialState, engine) {
  const engineMiddleware = storage.createMiddleware(
      engine)
      //[], -> blacklist
      //[]) -> whitelist

  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      engineMiddleware,
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const engine = createEngine('my-save-key');
engine = filter(engine, [
    'buylists',
], [
    'nav',
]);
const store = configureStore({}, engine)
const load = storage.createLoader(engine);

console.log("loading data")
load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch((err) => {
        console.log(err);
        console.log('Failed to load previous state')});

export default class Buylist extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('buylist', () => Buylist);
