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

export function showLoggedAdmin(id) {
  return dispatch => {
    return fetch('https://protected-reaches-40551.herokuapp.com/admins/' + id, {
      method: "GET",
      credentials: 'include'
    })
    // .then(response => console.log(response.json(), 'this is response.json in the admin actions'))
    .then(response => response.json())
    .then(json => dispatch(returnLoggedAdmin(json)))
  }
}

export function returnLoggedAdmin(json) {
  return {type: types.LOGGED_ADMIN, email: json.admin.email, isLeadAdmin: json.admin.is_lead_admin, adminName: json.admin.name}
}

export function editAdmin(id, name, email, password) {
  return dispatch => {
    return fetch('https://protected-reaches-40551.herokuapp.com/admins/' + id, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(json => dispatch(returnNewAdmin(json)))
  }
}

export function returnNewAdmin(json) {
  return {type: types.EDIT_ADMIN, name: json.admin.name, email: json.admin.email, isLeadAdmin: json.admin.is_lead_admin}
}
