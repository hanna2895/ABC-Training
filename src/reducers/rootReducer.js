import { combineReducers } from 'redux';
// import admins from './adminReducer';
import logged_in from './userReducer';
import admins from './adminReducer';
import students from './studentReducer';

const rootReducer = combineReducers({
  logged_in,
  admins,
  students
});

export default rootReducer;
