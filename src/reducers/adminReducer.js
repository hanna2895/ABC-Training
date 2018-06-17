import initialState from './initialState';
import { GET_ADMINS, LOGGED_ADMIN, EDIT_ADMIN } from '../actions/actionTypes';

export default function admins(state = initialState, action) {
  switch(action.type) {
    case GET_ADMINS:
      return {
        ...state,
        admins: action.admins
      }
    case LOGGED_ADMIN:
      return {
        ...state,
        admin_email: action.email,
        admin_isLeadAdmin: action.isLeadAdmin,
        admin_name: action.adminName
      }
    case EDIT_ADMIN:
      return {
        ...state,
        admin_email: action.email,
        admin_isLeadAdmin: action.isLeadAdmin,
        admin_name: action.name
      }
    default:
      return state;
  }
}
