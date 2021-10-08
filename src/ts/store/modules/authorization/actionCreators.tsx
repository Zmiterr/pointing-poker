   
import { Dispatch } from 'redux';
import { AuthorizationActionsTypes } from './actionTypes';

const authorizationOn = (data: any) => ({
  type: AuthorizationActionsTypes.JOIN,
  payload: data,
});

const authorizationSuceed = (dispatch: Dispatch, firstName: string) => (): any => {
  dispatch(authorizationOn(firstName));
};

export default authorizationSuceed;