import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const user = createReducer({}, {
})

export const loginAttempts = createReducer(0, {
  [types.LOGIN](state, action) {
    return state + 1;
  }
})

export const buylists = createReducer(["Personal items", "1009", "Girlfriend"], {
  [types.ADD_BUYLIST](state, action) {
    return [
      ...state,
      action.name,
    ]
  }
})
