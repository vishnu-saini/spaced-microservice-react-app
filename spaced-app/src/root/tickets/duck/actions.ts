import { TicketActionTypes } from './types';
import Ticket from 'model/Ticket';

const updateFlightTickets = (tickets: Ticket[]): TicketActionTypes => ({
  type: 'UPDATE_FLIGHT_TICKETS',
  payload: tickets
});

const resetFlightTickets = (): TicketActionTypes => ({
  type: 'RESET_FLIGHT_TICKETS',
  payload: undefined
});

export default {
  updateFlightTickets,
  resetFlightTickets
};
