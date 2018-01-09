import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const offline = createReducer([], {
  [types.ADD_BUYLIST_ERROR](state, action) {
    newState = [
      ...state,
      action.action,
    ]
    return newState
  },
  [types.DELETE_BUYLIST_ERROR](state, action) {
    newState = [
      ...state,
      action.action,
    ]
    return newState
  },
  [types.UPDATE_BUYLIST_ERROR](state, action) {
    newState = [
      ...state,
      action.action
    ]
    return newState
  },
  [types.ADD_USER_ERROR](state, action) {
    newState = [
      ...state,
      action.action
    ]
    return newState
  },
  [types.DELETE_USER_ERROR](state, action) {
    newState = [
      ...state,
      action.action,
    ]
    return newState
  },
  [types.UPDATE_USER_ERROR](state, action) {
    newState = [
      ...state,
      action.action,
    ]
    return newState
  },
  [types.RETRY_SUCCESS](state, action) {
    newState = state.slice(1)
    return newState
  },
  [types.CLEAR_RETRY](state, action) {
    return []
  }
})
