import { combineReducers } from 'redux'
import * as loginAttempts from './buylists'
import * as nav from './navigation'
import * as storage from 'redux-storage'

export default storage.reducer(combineReducers(Object.assign(
  loginAttempts,
  nav,
)));
