import initialState from './initialState';
import { STUDENT_LOGGED, ADMIN_LOGGED, LOGIN_FAILED, LOGGED_OUT } from '../actions/actionTypes';

export default function user_type(state = initialState, action) {
  switch(action.type) {
    case STUDENT_LOGGED:
      return {
        ...state,
        logged_in: true,
        user_type: "student",
        user_id: action.user_id,
        user_name: action.user_name
      }
    case ADMIN_LOGGED:
      return {
        ...state,
        logged_in: true,
        user_type: "admin",
        user_id: action.user_id,
        user_name: action.user_name
      }
    case LOGIN_FAILED:
      return {
        ...state,
        message: "Your username or password was incorrect."
      }
    case LOGGED_OUT:
      return {
        ...state,
        logged_in: false,
        user_type: "",
        user_id: "",
        user_name: ""
      }
    default:
      return state;
  }
}
