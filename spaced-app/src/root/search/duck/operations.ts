import searchActions from './actions';
import SearchModel from 'model/SearchModel';
import { Dispatch } from 'redux';
import { searchFlights, ISearchFlightReqData } from 'api';
import { ISpacedThunkResult } from 'store';

const {
  fetchSearchResultStart,
  fetchSearchResultSuccess,
  fetchSearchResultFail,
  updateSearchFormData,
  resetSearchFormData
} = searchActions;

const fetchFlights = (
  formData: SearchModel
): ISpacedThunkResult<Promise<void>> => (dispatch: Dispatch) => {
  const requestData: ISearchFlightReqData = {
    departDate: formData.departDate,
    destinationCode: formData.destination.code,
    noOfPassenger: formData.passenger.total,
    originCode: formData.origin.code
  };
  dispatch(fetchSearchResultStart());
  return searchFlights(requestData).then(
    response => {
      dispatch(fetchSearchResultSuccess(response));
    },
    error => {
      dispatch(fetchSearchResultFail(error.response.data));
    }
  );
};
export default {
  fetchFlights,
  updateSearchFormData,
  resetSearchFormData
};
