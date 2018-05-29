import * as types from './actionTypes';

export function checkLoginSuccess(json) {
  console.log(json)
  return {type: types.LOG_IN}
}

export function logIn(email, password) {
    console.log(email, password)
  return dispatch => {
    console.log(password, ' this is password')
    return fetch('http://localhost:3000/login', {
      method: "POST",
      // credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
      // headers: {
      //   'Access-Control-Allow-Credentials': 'true'
      // }
    })
    .then(response => response.json())
    .then(json => dispatch(checkLoginSuccess(json)))
  }
}
