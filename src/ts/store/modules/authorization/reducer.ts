import { string } from 'prop-types';
import { AuthorizationActionsTypes, AuthorizationActions } from './actionTypes';

const initialState: any = {
  roomId: '',
  firstName: '',
  lastName: '',
  jobPosition: '',
  image: '',
  isObserver: false,
};

const authorizationReducer = (state = initialState, action: AuthorizationActions): any => {
  switch (action.type) {
    case AuthorizationActionsTypes.JOIN:
      return { ...state, roomId: string || '', firstName: string, lastName: string || '', jobPosition: string || '', image: string || '', isObserver: false || true};
    default:
      return state;
  }
};

export default authorizationReducer;
