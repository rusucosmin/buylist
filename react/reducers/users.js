import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import User from '../models/user'

export const users = createReducer([], {
  [types.ADD_USER_SUCCESS](state, action) {
    return [...state, new User(action.user.id,
      action.user.email, action.user.role)]
  },
  [types.FETCH_USERS_SUCCESS](state, action) {
    return [...(action.users)]
  },
  [types.UPDATE_USER_SUCCESS](state, action) {
    return state.map(b => b.id == action.user.id ?
        new User(action.user.id, action.user.email, action.user.role)
        : b)
  },
  [types.DELETE_USER_SUCCESS](state, action) {
    return state.filter(b => b.id != action.id)
  },
})
