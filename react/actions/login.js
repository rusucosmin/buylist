import * as types from './types'
import LoginApi from '../api/login'
import { fetchBuylists } from './buylists'

export function login(email, password) {
  return function(dispatch) {
    dispatch(loginStarted())
    return LoginApi.login(email, password)
      .then(data => {
        dispatch(loginSuccess(data.jwt))
        dispatch(getUser(data.jwt))
      }).catch(error => {
        dispatch(loginError(error))
      });
  };
}

export function getUser(jwt) {
  return function(dispatch) {
    dispatch(getUserStarted())
    return LoginApi.getCurrentUser(jwt)
      .then(data => {
        dispatch(getUserSuccess(data))
        dispatch(fetchBuylists(jwt))
        dispatch({
          type: "Navigation/NAVIGATE",
          routeName: "Buylists"
        })
      }).catch(error => {
        dispatch(getUserError(error))
      })
  }
}

export function getUserStarted() {
  return {type: types.GET_USER_STARTED}
}

export function getUserSuccess(data) {
  return {type: types.GET_USER_SUCCESS, data}
}

export function getUserError() {
  return {type: types.GET_USER_ERROR}
}

export function loginStarted() {
  return {type: types.LOGIN_STARTED}
}

export function loginSuccess(token) {
  return {type: types.LOGIN_SUCCESS, token}
}

export function loginError(error) {
  return {type: types.LOGIN_ERROR, error: error}
}
