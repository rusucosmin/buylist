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
  return function(dispatch) {
    dispatch(addBuylistStarted())
    return BuylistsApi.addBuylist(jwt, user_id, name, description)
      .then(data => dispatch(addBuylistSuccess(data)))
      .catch(error => dispatch(addBuylistError(error)))
  }
}

export function addBuylistStarted() {
  return {type: types.ADD_BUYLIST_STARTED}
}

export function addBuylistSuccess(buylist) {
  return {type: types.ADD_BUYLIST_SUCCESS, buylist}
}

export function addBuylistError(error) {
  return {type: types.ADD_BUYLIST_ERROR, error}
}

export function deleteBuylist(jwt, id) {
  return function(dispatch) {
    dispatch(deleteBuylistStarted())
    return BuylistsApi.deleteBuylist(jwt, id)
        .then(data => dispatch(deleteBuylistSuccess(id)))
        .catch(error => dispatch(deleteBuylistError(error)))
  }
}

export function deleteBuylistStarted() {
  return {type: types.DELETE_BUYLIST_STARTED}
}

export function deleteBuylistSuccess(id) {
  return {type: types.DELETE_BUYLIST_SUCCESS, id}
}

export function deleteBuylistError(error) {
  return {type: types.DELETE_BUYLIST_ERROR, error}
}

export function updateBuylist(jwt, id, name, description) {
  return function(dispatch) {
    dispatch(updateBuylistStarted())
    return BuylistsApi.updateBuylist(jwt, id, name, description)
        .then(data => dispatch(updateBuylistSuccess(data)))
        .catch(error => dispatch(deleteBuylistError(error)))
  }
}

export function updateBuylistStarted() {
  return {type: types.UPDATE_BUYLIST_STARTED}
}

export function updateBuylistSuccess(buy_list) {
  return {type: types.UPDATE_BUYLIST_SUCCESS, buy_list}
}

export function updateBuylistError(error) {
  return {type: types.UPDATE_BUYLIST_ERROR, error}
}
