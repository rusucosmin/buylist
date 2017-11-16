import { combineReducers } from 'redux'
import * as loginReducer from './login'

export default combineReducers(Object.assign(
  loginReducer,
))
