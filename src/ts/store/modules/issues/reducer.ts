import { IssuesActionsType, IssuesActions } from './actionTypes';

const defaultState: any = {
  issues: [],
  isLoading: false,
  isError: false,
};

const issuesReducer = (state = defaultState, action: IssuesActions): any => {
  switch (action.type) {
    case IssuesActionsType.GET_ISSUES:
      return { ...state, issues: action.payload, isLoading: false, isError: false };

    case IssuesActionsType.REMOVE_ISSUE:
      return { ...state, issues: state.issues.filter((issue: any) => issue.id !== action.payload), isLoading: false, isError: false };

    case IssuesActionsType.FETCH_ISSUES_REQUEST:
      return { ...state, issues: [], isLoading: true, isError: false };

    case IssuesActionsType.FETCH_ISSUES_ERROR:
      return { ...state, issues: [], isLoading: false, isError: true };

    default:
      return state;
  }
};

export default issuesReducer;
