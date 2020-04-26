import CheckoutFlightInfo from 'model/CheckoutFlightInfo';

export interface IUpdateFlightInfoActionType {
  type: 'UPDATE_CHECKOUT_FLIGHT_INFO';
  payload: CheckoutFlightInfo;
}

export interface IResetFlightInfoActionType {
  type: 'RESET_CHECKOUT_FLIGHT_INFO';
  payload: undefined;
}

export type CheckoutActionTypes =
  | IUpdateFlightInfoActionType
  | IResetFlightInfoActionType;
