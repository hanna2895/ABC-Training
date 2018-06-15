import initialState from './initialState';
import { GET_ADMINS } from '../actions/actionTypes';

export default function admins(state = initialState, action) {
  switch(action.type) {
    case GET_ADMINS:
      return {
        ...state,
        admins: action.admins
      }
    default:
      return state;
  }
}
