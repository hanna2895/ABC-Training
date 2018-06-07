import initialState from './initialState';
import { FETCH_ADMINS, RECEIVE_ADMINS } from '../actions/actionTypes';

export default function admins(state = initialState.admins, action) {
  let newState;
  switch(action.type) {
    case FETCH_ADMINS:
      console.log('FETCH_ADMINS action')
      return action;
    case RECEIVE_ADMINS:
      newState = action.admins;
      console.log('RECEIVE_ADMINS action')
      return newState;
    default:
      return state;
  }
}
