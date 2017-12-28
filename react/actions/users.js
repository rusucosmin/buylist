import * as types from './types'
import UsersApi from '../api/users'

export function fetchUsers(jwt) {
  console.log("fetch users")
  return function(dispatch) {
    dispatch(fetchUsersStarted())
    return UsersApi.fetchUsers(jwt)
      .then(data => {
        dispatch(fetchUsersSuccess(data))
      }).catch(error => {
        console.log("There was an error")
        console.log(errr)
        dispatch(fetchUsersError(error))
      })
  }
}

export function fetchUsersStarted() {
  return {type: types.FETCH_USERS_STARTED}
}

export function fetchUsersSuccess(users) {
  return {type: types.FETCH_USERS_SUCCESS, users}
}

export function fetchUsersError(error) {
  return {type: types.FETCH_USERS_ERROR, error}
}

export function addUser(jwt, email, password) {
  return function(dispatch) {
    dispatch(addUserStarted())
    return UsersApi.addUser(jwt, email, password)
      .then(data => dispatch(addUserSuccess(data)))
      .catch(error => dispatch(addUserError(error)))
  }
}

export function addUserStarted() {
  return {type: types.ADD_USER_STARTED}
}

export function addUserSuccess(user) {
  return {type: types.ADD_USER_SUCCESS, user}
}

export function addUserError(error) {
  return {type: types.ADD_USER_ERROR, error}
}

export function deleteUser(jwt, id) {
  return function(dispatch) {
    dispatch(deleteUserStarted())
    return UsersApi.deleteUser(jwt, id)
        .then(data => dispatch(deleteUserSuccess(id)))
        .catch(error => dispatch(deleteUserError(error)))
  }
}

export function deleteUserStarted() {
  return {type: types.DELETE_USER_STARTED}
}

export function deleteUserSuccess(id) {
  return {type: types.DELETE_USER_SUCCESS, id}
}

export function deleteUserError(error) {
  return {type: types.DELETE_USER_ERROR, error}
}

export function updateUser(jwt, id, email, role, password) {
  return function(dispatch) {
    dispatch(updateUserStarted())
    return UsersApi.updateUser(jwt, id, email, role, password)
        .then(data => dispatch(updateUserSuccess(data)))
        .catch(error => dispatch(updateUserError(error)))
  }
}

export function updateUserStarted() {
  return {type: types.UPDATE_USER_STARTED}
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user}
}

export function updateUserError(error) {
  return {type: types.UPDATE_USER_ERROR, error}
}
