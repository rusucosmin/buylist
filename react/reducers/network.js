import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

const initialState = {
  actionQueue: [],
  isConnected: false,
};

export const network = createReducer(initialState, {
  [types.CHANGE_CONNECTION_STATUS](state, action) {
    return Object.assign({}, state, {
      isConnected: action.isConnected,
    });
  },
})
