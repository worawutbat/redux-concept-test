import { combineReducers } from 'redux';
import todos from './todos'
import { counter } from './counter'
import { sxsd } from './xxx'

export default combineReducers({
  todos,
  counter,
  sxsd
})