import { combineReducers } from 'redux'
import * as loginAttempts from './buylists'

export default combineReducers(Object.assign(
  loginAttempts,
));
