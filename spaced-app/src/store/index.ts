import { combineReducers } from 'redux';
import { searchReducer } from '../root/search/duck';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { checkoutReducer } from 'root/checkout/duck';
import { ticketReducer } from 'root/tickets/duck';

const rootReducer = combineReducers({
  flightSearch: searchReducer,
  checkout: checkoutReducer,
  tickets: ticketReducer
});

type MyExtraArg = undefined;
export type IAppState = ReturnType<typeof rootReducer>;
export type ISpacedThunkResult<R> = ThunkAction<
  R,
  IAppState,
  MyExtraArg,
  Action
>;
export type ISpacedThunkDispatch = ThunkDispatch<IAppState, MyExtraArg, Action>;

export default rootReducer;
