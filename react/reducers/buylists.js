import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import { AsyncStorage } from 'react-native'
import Buylist from '../models/buylist'

export const user = createReducer({}, {
})

export const loginAttempts = createReducer(0, {
  [types.LOGIN](state, action) {
    return state + 1;
  }
})

export const buylists = createReducer([
  new Buylist(1, "Personal items", "Just my personal itesm"),
  new Buylist(2, "1009", "Room 1009 buylist"),
  new Buylist(3, "Girlfriend",
      "Buylist for my girlfriend so that I can make her the best presents")
  ], {
  [types.ADD_BUYLIST](state, action) {
    newBuylist = [
      ...state,
      new Buylist(action.id, action.name, action.description, action.date)
    ]
    return newBuylist
  },
  [types.DELETE_BUYLIST](state, action) {
    return state.filter(b => b.id != action.id)
  },
  [types.UPDATE_BUYLIST](state, action) {
    return state.map(b => b.id == action.id ?
        new Buylist(action.id, action.name, action.description, action.date) :
        b)
  }
})
