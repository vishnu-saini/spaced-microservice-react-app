import './CheckoutForm.scss';
import React, { useState, useContext } from 'react';
import Seat from '../../img/seat.png';
import CheckoutFlightInfo from 'model/CheckoutFlightInfo';
import moment from 'moment';
import SearchModel from 'model/SearchModel';
import { numberWithCommas } from 'utils';
import { checkout } from 'api';
import { __RouterContext } from 'react-router';
import Ticket from 'model/Ticket';

interface ICheckoutFormProps {
  seatCount: number;
  flightInfo: CheckoutFlightInfo;
  searchFormData: SearchModel;
  selectedSeats: string[];
  updateTickets(tickets: Ticket[]): void;
  reseatSearchForm(): void;
  resetFlightInfo(): void;
}

const CheckoutForm: React.FC<ICheckoutFormProps> = props => {
  const {
    seatCount,
    flightInfo,
    searchFormData,
    selectedSeats,
    updateTickets,
    reseatSearchForm,
    resetFlightInfo
  } = props;
  const [mood, setMood] = useState('chat');
  const [seatMsg, setSeatMsg] = useState('');
  const [checkoutError, setCheckoutError] = useState('');
  const router = useContext(__RouterContext);

  const taxRate = 10;
  const fare =
    flightInfo.flightClass[searchFormData.class].priceInBaseUnit *
    searchFormData.passenger.total;
  const taxes =
    (flightInfo.flightClass[searchFormData.class].priceInBaseUnit *
      searchFormData.passenger.total *
      taxRate) /
    100;

  const total = fare + taxes;

  const onCheckout = () => {
    if (selectedSeats.length < searchFormData.passenger.total) {
      setSeatMsg('Please select seats');
      return;
    } else {
      setSeatMsg('');
    }

    checkout({
      flightId: flightInfo.id,
      travelMood: mood,
      totalSeats: searchFormData.passenger.total,
      totalPrice: total,
      seats: selectedSeats,
      flightClass: searchFormData.class
    }).then(
      () => {
        setCheckoutError('');
        updateTickets([
          ...selectedSeats.map(seat => ({
            origin: searchFormData.origin,
            destination: searchFormData.destination,
            startTime: flightInfo.startTime,
            endTime: flightInfo.startTime,
            departDate: flightInfo.departDate,
            seat,
            flight: 'SMP275',
            passenger: 'Vishnu Saini',
            gate: '5B',
            terminal: '2'
          }))
        ]);
        resetFlightInfo();
        reseatSearchForm();
        router.history.push('/tickets');
      },
      error =>
        setCheckoutError(
          'There is some error while booking your tickets, please try again'
        )
    );
  };

  return (
    <div className="checkout-form">
      <h1 className="main-title">Checkout</h1>
      <p className="section">Please confirm your travel details</p>
      <div className="section">
        <span className="label">DATE: </span>
        <span>
          {moment(flightInfo.departDate, 'DD/MM/YYYY').format('ddd, D MMM')}
        </span>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <span className="label">TIME: </span>
        <span>{flightInfo.startTime}</span>
      </div>
      <div className="section">
        <div className="label">seat selection:</div>
        {seatMsg && <div style={{ color: 'red' }}>{seatMsg}</div>}
        {Array.from(Array(seatCount)).map((s, index) => (
          <div className="selected-seat" key={`${index}${s}`}>
            <img src={Seat} className="seat-img" alt="seat" />
            <div className="seat-number">{selectedSeats[index]}</div>
          </div>
        ))}
      </div>
      <div className="section">
        <div className="label">Your Travel Mood:</div>
        <div className="radio">
          <input
            type="radio"
            name="mood"
            value="business"
            checked={mood === 'business'}
            className="mood-radio"
            onChange={event => setMood(event.target.value)}
          />
          Business Travel
        </div>
        <div className="radio">
          <input
            type="radio"
            name="mood"
            value="dnd"
            checked={mood === 'dnd'}
            className="mood-radio"
            onChange={event => setMood(event.target.value)}
          />
          Do not disturb
        </div>
        <div className="radio">
          <input
            type="radio"
            name="mood"
            value="chat"
            checked={mood === 'chat'}
            className="mood-radio"
            onChange={event => setMood(event.target.value)}
          />
          I would like to chat during the flight
        </div>
      </div>
      <div className="section">
        <div className="label">Balance:</div>
        <div className="flex-container">
          <div className="flex-itm">
            Fare (x{searchFormData.passenger.total})
          </div>
          <div className="flex-itm">${numberWithCommas(fare)}</div>
        </div>
        <div className="flex-container">
          <div className="flex-itm">Taxes & Fees</div>
          <div className="flex-itm">${numberWithCommas(taxes)}</div>
        </div>
        <div className="flex-container">
          <div className="flex-itm">Total</div>
          <div className="flex-itm">
            <span className="total-price">${numberWithCommas(total)}</span>
          </div>
        </div>
      </div>
      <div>
        {checkoutError && <div style={{ color: 'red' }}>{checkoutError}</div>}
        <button type="button" className="pay-now" onClick={onCheckout}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
