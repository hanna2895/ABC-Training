import { combineReducers } from 'redux';
// import admins from './adminReducer';
import users from './userReducer'

const rootReducer = combineReducers({
  users
});

export default rootReducer;
