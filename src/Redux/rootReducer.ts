import { combineReducers } from 'redux';
import { reducer as user } from './ducks/users.duck';

export const rootReducer = combineReducers({
  user: user,
});
