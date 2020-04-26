import './TicketComponent.scss';
import React from 'react';
import Ticket from 'model/Ticket';
import Logo from 'img/logo.png';
import moment from 'moment';

interface ITicketComponentProps {
  ticket: Ticket;
}

const TicketComponent: React.FC<ITicketComponentProps> = props => {
  const { ticket } = props;

  return (
    <div className="ticket">
      <div className="ticket-top">
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="flex-container">
          <div className="flex-itm ">
            {ticket.origin.name}{' '}
            <div className="caption-text ">{ticket.origin.code}</div>
          </div>

          <div className="flex-itm">----></div>
          <div className="flex-itm">
            {ticket.destination.name}
            <div className="caption-text ">{ticket.destination.code}</div>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-itm">
            {ticket.startTime}
            <div className="small-label">
              {moment(ticket.departDate, 'DD-MM-YYYY').format('ddd, MMM D')}
            </div>
          </div>
          <div className="flex-itm">
            {ticket.startTime}
            <div className="small-label">
              {moment(ticket.departDate, 'DD-MM-YYYY').format('ddd, MMM D')}
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-itm">
            <div className="small-label">terminal</div>
            {ticket.terminal}
          </div>
          <div className="flex-itm">
            <div className="small-label">gate</div>
            {ticket.gate}
          </div>
          <div className="flex-itm">
            <div className="small-label">boarding</div>
            {ticket.startTime}
          </div>
        </div>
      </div>
      <div className="ticket-bottom">
        <div>
          <div className="circle left"></div>
          <div className="circle right"></div>
        </div>
        <div className="flex-container">
          <div className="small-label">boarding pass</div>
        </div>
        <div className="flex-container">
          <div className="flex-itm">
            <div className="small-label">flight</div>
            <div>{ticket.flight}</div>
            <br />
            <div className="small-label">Passenger</div>
            <div>{ticket.passenger}</div>
          </div>
          <div className="flex-itm">
            <div className="small-label">Seat</div>
            <div className="seat">{ticket.seat}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
