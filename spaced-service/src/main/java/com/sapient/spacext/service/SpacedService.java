package com.sapient.spacext.service;

import java.util.Date;
import java.util.List;

import com.sapient.spacext.model.CheckoutForm;
import com.sapient.spacext.model.ClassInfo;
import com.sapient.spacext.model.Destination;
import com.sapient.spacext.model.Flight;
import com.sapient.spacext.model.Origin;
import com.sapient.spacext.model.TravelDateInfo;

public interface SpacedService {

	List<ClassInfo> getFlightClasses();

	List<Origin> getOriginsByQuery(String query);

	List<Destination> getDestinations();

	List<TravelDateInfo> getTravelDateInfosByOriginAndDestination(String originCode, String destinationCode);

	List<Flight> searchFlights(String originCode, String destinationCode, Date departDate, Integer noOfPassenger);

	Origin getOriginsByCode(String code);

	Destination getDestinationsByCode(String code);

	Flight getFlightInfoForCheckout(String id);

	void checkout(CheckoutForm checkoutForm);
}
