import initialState from './initialState';
import { STUDENT_LOGGED, ADMIN_LOGGED } from '../actions/actionTypes';

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
    default:
      return state;
  }
}
