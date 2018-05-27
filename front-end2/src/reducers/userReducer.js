import initialState from './initialState';
import { LOG_IN, CHECK_LOGIN_SUCCESS } from '../actions/actionTypes';

export default function users(state = initialState.logged_in, action) {
  let newState;
  switch(action.type) {
    case LOG_IN:
      console.log('log in action called')
      return action;
    case CHECK_LOGIN_SUCCESS:
      console.log('checkLoginSuccess called')
      return action;
      // return (
      //   ...state,
      //   logged_in: true
      // )
    default:
      return state;
  }
}
