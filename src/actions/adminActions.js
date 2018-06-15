import * as types from './actionTypes';

export function getAdmins() {
  return dispatch => {
    return fetch('https://protected-reaches-40551.herokuapp.com/admins', {
      method: "GET",
      credentials: 'include'
    })
    .then(response => response.json())
    .then(json => dispatch(returnAdmins(json)))
  }
}

export function returnAdmins(json) {
  return {type: types.GET_ADMINS, admins: json.admins}
}
