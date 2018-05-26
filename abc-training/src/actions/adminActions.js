import * as types from './actionTypes';

function url() {
  return 'http://localhost:3000/admins'
}

export function receiveAdmins(json) {
  return {type: types.RECEIVE_ADMINS, admins: json.admins};
}

// this makes a fetch call to my api to get all the admins 
export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET'
      // mode: 'cors', <- do I need this?
      // credentials: 'include', <- need this later

    })
    .then(response => response,json())
    .then(json => dispatch(receiveAdmins(json)))
  };
}
