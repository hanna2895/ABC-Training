import * as types from './actionTypes';

function url() {
  return 'http://localhost:3000/admins'
}

export function receiveAdmins(json) {
  return {type: types.RECEIVE_ADMINS, admins: json.admins};
}

export function fetchAdmins() {
  return dispatch => {
    return fetch(url(), {
      method: "GET"
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(json => dispatch(receiveAdmins(json)))
  };
}
