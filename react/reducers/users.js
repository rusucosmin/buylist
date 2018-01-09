import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import User from '../models/user'

export const users = createReducer([], {
  [types.ADD_USER_SUCCESS](state, action) {
    return [...state, new User(action.user.id,
      action.user.email, action.user.role)]
  },
  [types.ADD_USER_ERROR](state, action) {
    return [...state, new User(action.action.id,
      action.action.email, action.action.role)]
  },
  [types.FETCH_USERS_SUCCESS](state, action) {
    return [...(action.users)]
  },
  [types.UPDATE_USER_SUCCESS](state, action) {
    return state.map(b => b.id == action.user.id ?
        new User(action.user.id, action.user.email, action.user.role)
        : b)
  },
  [types.UPDATE_USER_ERROR](state, action) {
    return state.map(b => b.id == action.action.id ?
        new User(action.action.id, action.action.email, action.action.role)
        : b)
  },
  [types.DELETE_USER_SUCCESS](state, action) {
    return state.filter(b => b.id != action.id)
  },
  [types.DELETE_USER_ERROR](state, action) {
    return state.filter(b => b.id != action.action.id)
  },
})
