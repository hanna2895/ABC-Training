import initialState from './initialState';
import { GET_STUDENTS } from '../actions/actionTypes';

export default function students(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENTS:
      console.log(action.students, 'this is students in studentreducers')
      return {
        ...state,
        students: action.students
      }
    default: return state;
  }
}
