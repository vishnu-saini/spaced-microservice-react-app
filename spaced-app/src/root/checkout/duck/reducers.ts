import { CheckoutActionTypes } from './types';
import CheckoutFlightInfo from 'model/CheckoutFlightInfo';

const initCheckoutState: CheckoutFlightInfo = {
  id: '',
  departDate: '',
  startTime: '',
  flightClass: {},
  bookedSeats: [],
  isLoaded: false
};

const checkoutReducer = (
  state = initCheckoutState,
  action: CheckoutActionTypes
): CheckoutFlightInfo => {
  switch (action.type) {
    case 'UPDATE_CHECKOUT_FLIGHT_INFO':
      return {
        ...action.payload,
        isLoaded: true
      };
    case 'RESET_CHECKOUT_FLIGHT_INFO':
      return {
        ...initCheckoutState
      };
    default:
      return state;
  }
};

export default checkoutReducer;
