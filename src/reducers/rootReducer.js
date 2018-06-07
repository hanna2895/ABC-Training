import { combineReducers } from 'redux';
// import admins from './adminReducer';
import logged_in from './userReducer'

const rootReducer = combineReducers({
  logged_in
});

export default rootReducer;
