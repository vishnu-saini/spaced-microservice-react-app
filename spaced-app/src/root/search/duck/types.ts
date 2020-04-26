import SearchModel from 'model/SearchModel';

export interface ISearchState {
  form: SearchModel;
  results: any[];
  isSearching: boolean;
  errorMsg: string;
}

export interface IFetchResultsStartActionType {
  type: 'FETCH_SEARCH_RESULT_START';
  payload: undefined;
}

export interface IFetchResultsSuccessActionType {
  type: 'FETCH_SEARCH_RESULT_SUCCESS';
  payload: Array<any>;
}

export interface IFetchResultsFailActionType {
  type: 'FETCH_SEARCH_RESULT_FAIL';
  payload: string;
}

export interface IUpdateFormDataActionType {
  type: 'UPDATE_SEARCH_FORM_DATA';
  payload: { field: string; value: any };
}

export interface IResetFormDataActionType {
  type: 'RESET_SEARCH_FORM_DATA';
  payload: undefined;
}

export type SearchActionTypes =
  | IFetchResultsStartActionType
  | IFetchResultsSuccessActionType
  | IFetchResultsFailActionType
  | IUpdateFormDataActionType
  | IResetFormDataActionType;
