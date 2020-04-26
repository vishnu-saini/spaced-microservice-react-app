import axios from 'axios';
import * as URLs from './URLs';

export const fetchOrigins = async (searchString: string): Promise<any> => {
  const response: any = await axios.get(URLs.ORIGINS_FETCH, {
    params: { searchString }
  });
  return await response.data;
};

export const fetchDestinations = async (): Promise<any> => {
  const response: any = await axios.get(URLs.DESTINATIONS_FETCH);
  return await response.data;
};

export const fetchFlightClasses = async (): Promise<any> => {
  const response: any = await axios.get(URLs.FLIGHT_CLASSES_FETCH);
  return await response.data;
};

export const fetchDepartDates = async (
  originCode: string,
  destinationCode: string
): Promise<any> => {
  const response: any = await axios.get(URLs.DEPART_DATES_FETCH, {
    params: { originCode, destinationCode }
  });
  return await response.data;
};

export interface ISearchFlightReqData {
  originCode: string;
  destinationCode: string;
  departDate: string;
  noOfPassenger: number;
}

export const searchFlights = async (requestData: ISearchFlightReqData) => {
  const response: any = await axios.get(URLs.FLIGHTS_SEARCH, {
    params: { ...requestData }
  });
  return await response.data;
};

export const fetchBookingInfo = async (flightId: string) => {
  const response: any = await axios.get(URLs.BOOKING_INFO_FETCH, {
    params: { flightId }
  });
  return await response.data;
};

export interface ICheckoutData {
  flightId: string;
  travelMood: string;
  totalSeats: number;
  totalPrice: number;
  flightClass: string;
  seats: string[];
}

export const checkout = async (checkoutData: ICheckoutData) => {
  const response: any = await axios.post(URLs.CHECKOUT, checkoutData);
  return await response.data;
};
