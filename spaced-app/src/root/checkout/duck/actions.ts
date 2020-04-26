import { CheckoutActionTypes } from './types';
import CheckoutFlightInfo from 'model/CheckoutFlightInfo';

const updateFlightInfo = (
  flightInfo: CheckoutFlightInfo
): CheckoutActionTypes => ({
  type: 'UPDATE_CHECKOUT_FLIGHT_INFO',
  payload: flightInfo
});

const resetFlightInfo = (): CheckoutActionTypes => ({
  type: 'RESET_CHECKOUT_FLIGHT_INFO',
  payload: undefined
});

export default {
  updateFlightInfo,
  resetFlightInfo
};
