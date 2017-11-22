import * as types from './types'

export function addBuylist(name) {
  return {
    type: types.ADD_BUYLIST,
    name: name,
  }
}
