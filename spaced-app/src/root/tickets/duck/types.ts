import Ticket from 'model/Ticket';

export interface IUpdateTicketsActionType {
  type: 'UPDATE_FLIGHT_TICKETS';
  payload: Ticket[];
}

export interface IResetTicketsActionType {
  type: 'RESET_FLIGHT_TICKETS';
  payload: undefined;
}

export type TicketActionTypes =
  | IUpdateTicketsActionType
  | IResetTicketsActionType;
