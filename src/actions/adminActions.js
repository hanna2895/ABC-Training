import * as types from './actionTypes';


// GET ALL THE ADMINS
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

// GET THE ADMIN THAT IS CURRENTLY LOGGED IN
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

// EDIT THE ADMIN THAT IS CURRENTLY LOGGED IN
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
    .then(json => dispatch(returnEditedAdmin(json)))
  }
}

export function returnEditedAdmin(json) {
  return {type: types.EDIT_ADMIN, name: json.admin.name, email: json.admin.email, isLeadAdmin: json.admin.is_lead_admin}
}

// ADD A NEW ADMIN
export function addAdmin(name, email, password, isLeadAdmin) {
  return dispatch => {
    return fetch('https://protected-reaches-40551.herokuapp.com/admins/', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        is_lead_admin: isLeadAdmin
      })
    })
    .then(response => response.json())
  }
}

// DELETE AN ADMIN
export function deleteAdmin(id) {
  return dispatch => {
    return fetch('https://protected-reaches-40551.herokuapp.com/admins/' + id, {
      method: "DELETE",
      credentials: 'include'
    })
    .then(response => response.json())
  }
}
