import { combineReducers } from 'redux';
import authorizationReducer from './modules/authorization/reducer';
import issuesReducer from './modules/issues/reducer';

const rootReducer = combineReducers({
  issuesReducer,
  authorizationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
