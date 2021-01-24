import commentReducer from './Comments';
import userReducer from './User';
import APIReducer from './APIData';

import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  user: userReducer,
  comment: commentReducer,
  APIData: APIReducer,
});

export default rootReducers;
