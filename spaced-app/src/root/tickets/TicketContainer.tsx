import React, { useContext, useEffect } from 'react';
import { IAppState, ISpacedThunkDispatch } from 'store';
import { connect } from 'react-redux';
import { __RouterContext } from 'react-router';
import Ticket from 'model/Ticket';
import TicketComponent from './TicketComponent';
import { ticketOperations } from './duck';

interface ICheckoutContainerProps {
  tickets: Ticket[];
  resetTickets(): void;
}

const TicketContainer: React.FC<ICheckoutContainerProps> = props => {
  const { tickets, resetTickets } = props;
  const router = useContext(__RouterContext);

  useEffect(() => () => resetTickets(), []); // eslint-disable-line

  // const tickets: Ticket[] = [
  //   {
  //     origin: { code: 'ORI', name: 'origin' },
  //     destination: { code: 'ORI', name: 'origin' },
  //     startTime: '10:00 PM',
  //     endTime: '11:00 PM',
  //     departDate: '12-12-2019',
  //     seat: '3D',
  //     flight: 'SMP275',
  //     passenger: 'Vishnu Saini',
  //     gate: '5B',
  //     terminal: '2'
  //   },
  //   {
  //     origin: { code: 'ORI', name: 'origin' },
  //     destination: { code: 'ORI', name: 'origin' },
  //     startTime: '10:00 PM',
  //     endTime: '11:00 PM',
  //     departDate: '12-12-2019',
  //     seat: '3D',
  //     flight: 'SMP275',
  //     passenger: 'Vishnu Saini',
  //     gate: '5B',
  //     terminal: '2'
  //   },
  //   {
  //     origin: { code: 'ORI', name: 'origin' },
  //     destination: { code: 'ORI', name: 'origin' },
  //     startTime: '10:00 PM',
  //     endTime: '11:00 PM',
  //     departDate: '12-12-2019',
  //     seat: '3D',
  //     flight: 'SMP275',
  //     passenger: 'Vishnu Saini',
  //     gate: '5B',
  //     terminal: '2'
  //   }
  // ];

  if (tickets.length === 0) {
    router.history.push('/');
  }

  return (
    <div className="ticket-container">
      {tickets.map((ticket, index) => (
        <TicketComponent ticket={ticket} key={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  tickets: state.tickets
});

const mapDispatchToProps = (dispatch: ISpacedThunkDispatch) => ({
  resetTickets: () => dispatch(ticketOperations.resetFlightTickets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketContainer);
