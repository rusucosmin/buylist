import * as types from '../actions/types';

export default function postsReducer(state = {}, action) {
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.data
    default:
      return state;
  }
}
