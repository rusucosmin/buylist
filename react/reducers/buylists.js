import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import Buylist from '../models/buylist'

export const buylists = createReducer([], {
  [types.ADD_BUYLIST_SUCCESS](state, action) {
    newBuylist = [
      ...state,
      new Buylist(action.buylist.id,action.buylist.name,
          action.buylist.description, action.buylist.date)
    ]
    return newBuylist
  },
  [types.FETCH_BUYLISTS_SUCCESS](state, action) {
    return [...(action.buylists)]
  },
  [types.UPDATE_BUYLIST_SUCCESS](state, action) {
    return state.map(b => b.id == action.buy_list.id ?
        new Buylist(action.buy_list.id, action.buy_list.name,
            action.buy_list.description, action.buy_list.date)
        : b)
  },
  [types.DELETE_BUYLIST_SUCCESS](state, action) {
    return state.filter(b => b.id != action.id)
  },
})
