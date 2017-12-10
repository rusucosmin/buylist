import * as types from './types'

export function addBuylist(id, name, description, date) {
  return {
    type: types.ADD_BUYLIST,
    id,
    name,
    description,
    date,
  }
}

export function updateBuylist(id, name, description, date) {
  return {
    type: types.UPDATE_BUYLIST,
    id,
    name,
    description,
    date,
  }
}

export function deleteBuylist(id) {
  return {
    type: types.DELETE_BUYLIST,
    id,
  }
}
