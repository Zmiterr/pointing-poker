import { Action } from 'redux';

export enum AuthorizationActionsTypes {
  JOIN = 'issues/JOIN',
}

export interface GetAuthorizedActionInterface extends Action<AuthorizationActionsTypes> {
  type: AuthorizationActionsTypes.JOIN;
  payload: any;
}

export type AuthorizationActions = GetAuthorizedActionInterface;
