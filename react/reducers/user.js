import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const user = createReducer({token: "token", login_attempt: {error: "", in_progress: false}}, {
  [types.LOGIN_SUCCESS](state, action) {
    return Object.assign({}, state, {
      token: action.token,
      login_attempt: {
        in_progress: false,
        error: ""
      }
    });
  },
  [types.LOGIN_STARTED](state, action) {
    return Object.assign({}, state, {
      login_attempt: {
        in_progress: true,
      }
    });
  },
  [types.LOGIN_ERROR](state, action) {
    return Object.assign({}, state, {
      login_attempt: {
        in_progress: false,
        error: action.error.message
      }
    });
  },
  [types.GET_USER_SUCCESS](state, action) {
    return Object.assign({}, state, action.data)
  }
})
