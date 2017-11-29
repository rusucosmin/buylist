import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import { AppNavigator } from '../App'

const initialState = AppNavigator.router
    .getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))

export const nav = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}
