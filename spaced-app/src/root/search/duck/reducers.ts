import { ISearchState, SearchActionTypes } from './types';

const initSearchState: ISearchState = {
  form: {
    origin: { name: '', code: '' },
    destination: { name: '', code: '' },
    departDate: '',
    passenger: { adults: 0, children: 0, infants: 0, total: 0 },
    flightId: '',
    class: 'economy'
  },
  errorMsg: '',
  isSearching: false,
  results: []
};

const searchReducer = (
  state = initSearchState,
  action: SearchActionTypes
): ISearchState => {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULT_START':
      return {
        ...state,
        isSearching: true,
        results: [],
        errorMsg: ''
      };
    case 'FETCH_SEARCH_RESULT_SUCCESS':
      return {
        ...state,
        isSearching: false,
        results: action.payload
      };
    case 'FETCH_SEARCH_RESULT_FAIL':
      return {
        ...state,
        isSearching: true,
        errorMsg: action.payload
      };
    case 'UPDATE_SEARCH_FORM_DATA':
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value
        }
      };
    case 'RESET_SEARCH_FORM_DATA':
      return {
        ...initSearchState
      };
    default:
      return state;
  }
};

export default searchReducer;
