import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';

import reducer from './app/reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose }
  from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

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
