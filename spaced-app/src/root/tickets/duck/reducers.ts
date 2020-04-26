import { TicketActionTypes } from './types';
import Ticket from 'model/Ticket';

const initTicketState: Ticket[] = [];

const ticketReducer = (
  state = initTicketState,
  action: TicketActionTypes
): Ticket[] => {
  switch (action.type) {
    case 'UPDATE_FLIGHT_TICKETS':
      return [...action.payload];
    case 'RESET_FLIGHT_TICKETS':
      return [];
    default:
      return state;
  }
};

export default ticketReducer;
