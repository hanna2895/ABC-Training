import initialState from './initialState';
import { LOG_IN, CHECK_LOGIN_SUCCESS } from '../actions/actionTypes';

export default function logged_in(state = initialState.logged_in, action) {
  let newState;
  switch(action.type) {
    case LOG_IN:
      console.log('checkLoginSuccess called')
      return {
        ...state,
        logged_in: true
      }
    default:
      return state;
  }
}
