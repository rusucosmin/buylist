import * as types from './types'
import UsersApi from '../api/users'
import BuylistsApi from '../api/buylists'

export function retryAction(action) {
  return function(dispatch) {
    dispatch(retryingAction(action))
    switch(action.type) {
      case types.ADD_BUYLIST_RETRY:
        return BuylistsApi.addBuylist(action.jwt, action.user_id, action.name, action.description, action.id)
          .then(data => dispatch(retrySuccess(data, action)))
          .catch(error => dispatch(retryError(error, action)))
        break;
      case types.UPDATE_BUYLIST_RETRY:
        return BuylistsApi.updateBuylist(action.jwt, action.id, action.name, action.description)
          .then(data => dispatch(retrySuccess(data, action)))
          .catch(error => dispatch(retryError(error, action)))
        break;
      case types.DELETE_BUYLIST_RETRY:
        return BuylistsApi.deleteBuylist(action.jwt, action.id)
          .then(data => dispatch(retrySuccess(data, action)))
          .catch(error => dispatch(retryError(error, action)))
        break;
      case types.ADD_USER_RETRY:
        return UsersApi.addUser(action.jwt, action.email, action.role, action.password, action.id)
          .then(data => dispatch(retrySuccess(data, action)))
          .catch(error => dispatch(retryError(error, action)))
        break;
      case types.UPDATE_USER_RETRY:
        return UsersApi.updateUser(action.jwt, action.id, action.email, action.role, action.password)
          .then(data => dispatch(retrySuccess(data, action)))
          .catch(error => dispatch(retryError(error, action)))
        break;
      case types.DELETE_USER_RETRY:
        return UsersApi.deleteUser(action.jwt, action.id)
          .then(data => dispatch(retrySuccess(data, action)))
          .catch(error => dispatch(retryError(error, action)))
        break;
    }
  }
}

export function retryingAction(action) {
  return { type: types.RETRYING_ACTION, action }
}

export function retrySuccess(action) {
  return { type: types.RETRY_SUCCESS, action }
}

export function retryError(action) {
  return { type: types.RETRY_ERROR, action }
}

export function clearRetry() {
  return { type: types.CLEAR_RETRY }
}
