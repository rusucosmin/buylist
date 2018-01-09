import * as types from './types'
import BuylistsApi from '../api/buylists'

export function fetchBuylists(jwt) {
  return function(dispatch) {
    dispatch(fetchBuylistsStarted())
    return BuylistsApi.fetchBuylists(jwt)
      .then(data => {
        dispatch(fetchBuylistsSuccess(data))
      }).catch(error => {
        dispatch(fetchBuylistsError(error))
      })
  }
}

export function fetchBuylistsStarted() {
  return {type: types.FETCH_BUYLISTS_STARTED}
}

export function fetchBuylistsSuccess(buylists) {
  return {type: types.FETCH_BUYLISTS_SUCCESS, buylists}
}

export function fetchBuylistsError(error) {
  return {type: types.FETCH_BUYLISTS_ERROR, error}
}
export function addBuylist(jwt, user_id, name, description) {
  var id = Math.floor(Math.random() * 100000) + 1 ;
  return function(dispatch) {
    dispatch(addBuylistStarted())
    return BuylistsApi.addBuylist(jwt, user_id, name, description)
      .then(data => dispatch(addBuylistSuccess(data)))
      .catch(error => dispatch(addBuylistError(error, {type: types.ADD_BUYLIST_RETRY, id, jwt, user_id, name, description})))
  }
}

export function addBuylistStarted() {
  return {type: types.ADD_BUYLIST_STARTED}
}

export function addBuylistSuccess(buylist) {
  return {type: types.ADD_BUYLIST_SUCCESS, buylist}
}

export function addBuylistError(error, action) {
  return {type: types.ADD_BUYLIST_ERROR, error, action}
}

export function deleteBuylist(jwt, id) {
  return function(dispatch) {
    dispatch(deleteBuylistStarted())
    return BuylistsApi.deleteBuylist(jwt, id)
        .then(data => dispatch(deleteBuylistSuccess(id)))
        .catch(error => dispatch(deleteBuylistError(error, {type: types.DELETE_BUYLIST_RETRY, jwt, id})))
  }
}

export function connectionState(status) {
  return { type: types.CHANGE_CONNECTION_STATUS, isConnected: status };
}

export function deleteBuylistStarted() {
  return {type: types.DELETE_BUYLIST_STARTED}
}

export function deleteBuylistSuccess(id) {
  return {type: types.DELETE_BUYLIST_SUCCESS, id}
}

export function deleteBuylistError(error, action) {
  return {type: types.DELETE_BUYLIST_ERROR, error, action}
}

export function updateBuylist(jwt, id, name, description) {
  return function(dispatch) {
    dispatch(updateBuylistStarted())
    return BuylistsApi.updateBuylist(jwt, id, name, description)
        .then(data => dispatch(updateBuylistSuccess(data)))
        .catch(error => dispatch(updateBuylistError(error, {type: types.UPDATE_BUYLIST_RETRY, jwt, id, name, description})))
  }
}

export function updateBuylistStarted() {
  return {type: types.UPDATE_BUYLIST_STARTED}
}

export function updateBuylistSuccess(buy_list) {
  return {type: types.UPDATE_BUYLIST_SUCCESS, buy_list}
}

export function updateBuylistError(error, action) {
  return {type: types.UPDATE_BUYLIST_ERROR, error, action}
}
