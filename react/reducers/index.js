import { combineReducers } from 'redux'
import * as loginAttempts from './buylists'
import * as nav from './navigation'

export default combineReducers(Object.assign(
  loginAttempts,
  nav,
));
