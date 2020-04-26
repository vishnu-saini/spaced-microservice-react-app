import checkoutActions from './actions';
import { Dispatch } from 'redux';
import { fetchBookingInfo } from 'api';
import { ISpacedThunkResult } from 'store';

const { updateFlightInfo, resetFlightInfo } = checkoutActions;

const fetchFlightBookingInfo = (
  flightId: string
): ISpacedThunkResult<Promise<void>> => (dispatch: Dispatch) => {
  return fetchBookingInfo(flightId).then(response => {
    dispatch(updateFlightInfo(response));
  });
};

export default { fetchFlightBookingInfo, resetFlightInfo };
