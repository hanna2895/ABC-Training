import initialState from './initialState';
import { STUDENT_LOGGED, ADMIN_LOGGED, LOGIN_FAILED } from '../actions/actionTypes';

export default function user_type(state = initialState, action) {
  switch(action.type) {
    case STUDENT_LOGGED:
      console.log('checkLoginSuccess called')
      return {
        ...state,
        logged_in: true,
        user_type: "student"
      }
    case ADMIN_LOGGED:
      return {
        ...state,
        logged_in: true,
        user_type: "admin"
      }
    case LOGIN_FAILED:
      return {
        ...state,
        message: "Your username or password was incorrect. Please try again or contact your system administrator."
      }
    default:
      return state;
  }
}
