import { combineReducers } from 'redux';
import admins from './adminReducer';

const rootReducer = combineReducers({
  admins
});

export default rootReducer;
