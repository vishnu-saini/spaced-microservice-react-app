import { SearchActionTypes } from './types';

const fetchSearchResultStart = (): SearchActionTypes => ({
  type: 'FETCH_SEARCH_RESULT_START',
  payload: undefined
});

const fetchSearchResultSuccess = (results: Array<any>): SearchActionTypes => ({
  type: 'FETCH_SEARCH_RESULT_SUCCESS',
  payload: results
});

const fetchSearchResultFail = (errorMsg: string): SearchActionTypes => ({
  type: 'FETCH_SEARCH_RESULT_FAIL',
  payload: errorMsg
});

const updateSearchFormData = (
  field: string,
  value: any
): SearchActionTypes => ({
  type: 'UPDATE_SEARCH_FORM_DATA',
  payload: { field, value }
});

const resetSearchFormData = (): SearchActionTypes => ({
  type: 'RESET_SEARCH_FORM_DATA',
  payload: undefined
});

export default {
  fetchSearchResultStart,
  fetchSearchResultSuccess,
  fetchSearchResultFail,
  updateSearchFormData,
  resetSearchFormData
};
