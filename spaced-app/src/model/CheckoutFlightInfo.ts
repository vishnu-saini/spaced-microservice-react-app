import BookedSeat from './BookedSeat';

type CheckoutFlightInfo = {
  id: string;
  departDate: string;
  startTime: string;
  flightClass: {
    [key: string]: {
      totalSeats: number;
      priceInBaseUnit: number;
      currency: string;
    };
  };
  bookedSeats: BookedSeat[];
  isLoaded: boolean;
};

export default CheckoutFlightInfo;
