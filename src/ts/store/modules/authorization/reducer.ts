import { AuthorizationActionsTypes, AuthorizationActions } from './actionTypes';

const initialState: any = {
  authorizationSet: []
};

const authorizationReducer = (state = initialState, action: AuthorizationActions): any => {
  switch (action.type) {
    case AuthorizationActionsTypes.JOIN:
      return { ...state, authorizationSet: action.payload};
    default:
      return state;
  }
};

export default authorizationReducer;
