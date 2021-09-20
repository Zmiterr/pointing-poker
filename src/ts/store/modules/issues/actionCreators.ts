import { Dispatch } from 'redux';
import { IssuesActionsType } from './actionTypes';
import ApiService from '../../../services/api-mock';

const mockDdataStoreService = new ApiService();
const { getIssuesData } = mockDdataStoreService;

const issuesLoaded = (data: any) => ({
  type: IssuesActionsType.GET_ISSUES,
  payload: data,
});

const issueRemoved = (issueId: number) => ({
  type: IssuesActionsType.REMOVE_ISSUE,
  payload: issueId,
});

const issuesRequested = () => ({
  type: IssuesActionsType.FETCH_ISSUES_REQUEST,
});

const issuesError = () => ({
  type: IssuesActionsType.FETCH_ISSUES_ERROR,
});

const getIssues = (dispatch: Dispatch) => (): any => {
  try {
    dispatch(issuesRequested());
    getIssuesData()
      .then((data: any) => {
        dispatch(issuesLoaded(data))
      });
  } catch (error) {
    dispatch(issuesError())
  }
};

const removeIssue = (dispatch: Dispatch, id: number) => (): any => {
  dispatch(issueRemoved(id));
};

export { getIssues, removeIssue };
