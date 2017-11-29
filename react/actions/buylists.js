import * as types from './types'

export function addBuylist(id, name, description) {
  return {
    type: types.ADD_BUYLIST,
    id,
    name,
    description,
  }
}

export function updateBuylist(id, name, description) {
  return {
    type: types.UPDATE_BUYLIST,
    id,
    name,
    description,
  }
}

export function deleteBuylist(id) {
  return {
    type: types.DELETE_BUYLIST,
    id,
  }
}
