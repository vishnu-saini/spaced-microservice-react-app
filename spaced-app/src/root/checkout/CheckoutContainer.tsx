import React, { useEffect, useContext, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { IAppState, ISpacedThunkDispatch } from 'store';
import { checkoutOperations } from './duck';
import SearchModel from 'model/SearchModel';
import CheckoutFlightInfo from 'model/CheckoutFlightInfo';
import { connect } from 'react-redux';
import { __RouterContext } from 'react-router';
import SeatLayout from './SeatLayout';
import Ticket from 'model/Ticket';
import { ticketOperations } from 'root/tickets/duck';
import { searchOperations } from 'root/search/duck';
import Shuttle from './Shuttle';

interface ICheckoutContainerProps {
  searchFormData: SearchModel;
  flightInfo: CheckoutFlightInfo;
  updateTickets(tickets: Ticket[]): void;
  fetchFlightBookingInfo(flightId: string): void;
  reseatSearchForm(): void;
  resetFlightInfo(): void;
}

const CheckoutContainer: React.FC<ICheckoutContainerProps> = props => {
  const {
    searchFormData,
    flightInfo,
    fetchFlightBookingInfo,
    updateTickets,
    reseatSearchForm,
    resetFlightInfo
  } = props;
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const router = useContext(__RouterContext);

  useEffect(() => {
    if (searchFormData.flightId)
      fetchFlightBookingInfo(searchFormData.flightId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (searchFormData.flightId === '') {
    router.history.push('/');
  }

  if (!flightInfo.isLoaded) {
    return <div className="checkout-component">Loading....</div>;
  } else
    return (
      <div className="checkout-component">
        <CheckoutForm
          seatCount={searchFormData.passenger.total}
          flightInfo={flightInfo}
          searchFormData={searchFormData}
          selectedSeats={selectedSeats}
          updateTickets={updateTickets}
          reseatSearchForm={reseatSearchForm}
          resetFlightInfo={resetFlightInfo}
        />
        <SeatLayout
          bookedSeats={flightInfo.bookedSeats}
          seatCount={searchFormData.passenger.total}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
        <Shuttle />
      </div>
    );
};

const mapStateToProps = (state: IAppState) => ({
  searchFormData: state.flightSearch.form,
  flightInfo: state.checkout
});

const mapDispatchToProps = (dispatch: ISpacedThunkDispatch) => ({
  fetchFlightBookingInfo: (flightId: string) =>
    dispatch(checkoutOperations.fetchFlightBookingInfo(flightId)),
  updateTickets: (tickets: Ticket[]) =>
    dispatch(ticketOperations.updateFlightTickets(tickets)),
  reseatSearchForm: () => dispatch(searchOperations.resetSearchFormData()),
  resetFlightInfo: () => dispatch(checkoutOperations.resetFlightInfo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
