import { Action } from 'redux';

export enum IssuesActionsType {
  GET_ISSUES = 'issues/GET_ISSUES',
  REMOVE_ISSUE = 'issues/REMOVE_ISSUE',
  FETCH_ISSUES_REQUEST = 'issues/FETCH_ISSUES_REQUEST',
  FETCH_ISSUES_ERROR = 'issues/FETCH_ERROR',
}

export interface GetIssuesActionInterface extends Action<IssuesActionsType> {
  type: IssuesActionsType.GET_ISSUES;
  payload: any;
}

export interface RemoveIssueActionInterface extends Action<IssuesActionsType> {
  type: IssuesActionsType.REMOVE_ISSUE;
  payload: any;
}

export interface FetchIssueRequestActionInterface extends Action<IssuesActionsType> {
  type: IssuesActionsType.FETCH_ISSUES_REQUEST;
}

export interface FetchIssueErrorActionInterface extends Action<IssuesActionsType> {
  type: IssuesActionsType.FETCH_ISSUES_ERROR;
}

export type IssuesActions = GetIssuesActionInterface | RemoveIssueActionInterface | FetchIssueRequestActionInterface | FetchIssueErrorActionInterface;
