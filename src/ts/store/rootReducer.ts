import { combineReducers } from 'redux';
import authorizationReducer from './modules/authorization/reducer';
import issuesReducer from './modules/issues/reducer';

const rootReducer = combineReducers({
  issuesReducer,
  reducer: authorizationReducer,
});

export default rootReducer;
