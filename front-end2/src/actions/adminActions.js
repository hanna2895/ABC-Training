// THIS PROBABLY DOESN'T NEED REDUX. KEEPING FOR EXAMPLE FOR COMPONENTS THAT WILL.

// import * as types from './actionTypes';
//
// function url() {
//   return 'http://localhost:3000/admins'
// }
//
// export function receiveAdmins(json) {
//   console.log({type: types.RECEIVE_ADMINS, admins: json.admins})
//   const adminNames = json.admins
//   console.log(adminNames)
//   return {type: types.RECEIVE_ADMINS, admins: json.admins};
// }
//
// export function fetchAdmins() {
//   return dispatch => {
//     return fetch(url(), {
//       method: "GET"
//       // credentials: 'include'
//     })
//     .then(response => response.json())
//     .then(json => dispatch(receiveAdmins(json)))
//     // console.log(response.json(), "this is response")
//   };
// }


// JK - tried to refactor but you can't use async here.
// export const receiveAdmins = (json) => {
//   return {type: types.RECEIVE_ADMINS, ADMINS: json.admins}
// }
//
// export const fetchAdmins = async () => {
//   const admins = await fetch(url(), {
//     method: "GET"
//     // credentials: 'include'
//   })
//
//   const adminsParsed = await admins.json();
//   console.log(adminsParsed, 'this is admins parsed from fetch admins in admin actions')
//   return dispatch => {
//     adminsParsed => dispatch(receiveAdmins(adminsParsed))
//   }
// }
