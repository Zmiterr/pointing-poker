import { Action } from 'redux';

export enum AuthorizationActionsTypes {
  JOIN = 'authorization/JOIN',
}

export interface GetAuthorizedActionInterface extends Action<AuthorizationActionsTypes> {
  type: AuthorizationActionsTypes.JOIN;
  payload: any;
}

export type AuthorizationActions = GetAuthorizedActionInterface;
