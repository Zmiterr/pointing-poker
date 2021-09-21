import { combineReducers } from 'redux';
import issuesReducer from './modules/issues/reducer';

const rootReducer = combineReducers({
  issuesReducer,
});

export default rootReducer;
