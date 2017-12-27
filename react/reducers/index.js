import * as storage from 'redux-storage'
import { combineReducers } from 'redux'

import * as buylists from './buylists'
import * as nav from './navigation'
import * as posts from './posts'
import * as users from './users'

export default storage.reducer(combineReducers(Object.assign(
  buylists,
  nav,
  posts,
  users,
)));
