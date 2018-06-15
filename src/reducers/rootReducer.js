import { combineReducers } from 'redux';
// import admins from './adminReducer';
import logged_in from './userReducer';
import admins from './adminReducer';

const rootReducer = combineReducers({
  logged_in,
  admins
});

export default rootReducer;
