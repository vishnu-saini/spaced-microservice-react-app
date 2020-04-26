package com.sapient.spacext.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sapient.spacext.model.Booking;
import com.sapient.spacext.model.CheckoutForm;
import com.sapient.spacext.model.ClassInfo;
import com.sapient.spacext.model.Destination;
import com.sapient.spacext.model.Flight;
import com.sapient.spacext.model.Origin;
import com.sapient.spacext.model.Seat;
import com.sapient.spacext.model.TravelDateInfo;

@Service
public class SpacedServiceImpl implements SpacedService {

	@Value("${json.server.url}")
	private String jsonServerUrl;

	private RestTemplate restTemplate = new RestTemplate();

	@SuppressWarnings("unchecked")
	@Override
	public List<Origin> getOriginsByQuery(String query) {
		ResponseEntity<List> responseEntity = restTemplate
				.getForEntity(jsonServerUrl + "/origin?fullName_like=" + query, List.class);
		return responseEntity.getBody();
	}

	@SuppressWarnings("unchecked")
	@Override
	public Origin getOriginsByCode(String code) {
		Origin[] origins = restTemplate.getForEntity(jsonServerUrl + "/origin?code=" + code, Origin[].class).getBody();
		if (origins.length > 0) {
			return origins[0];
		} else {
			return null;
		}
	}

	@Override
	public List<Destination> getDestinations() {
		ResponseEntity<List> responseEntity = restTemplate.getForEntity(jsonServerUrl + "/destination", List.class);
		return responseEntity.getBody();
	}

	@Override
	public Destination getDestinationsByCode(String code) {

		Destination[] destinations = restTemplate
				.getForEntity(jsonServerUrl + "/destination?code=" + code, Destination[].class).getBody();
		if (destinations.length > 0) {
			return destinations[0];
		} else {
			return null;
		}

	}

	@Override
	public List<TravelDateInfo> getTravelDateInfosByOriginAndDestination(String originCode, String destinationCode) {
		// originCode and destinationCode will be utilized here to fetch travelDateInfo.
		ResponseEntity<List> responseEntity = restTemplate.getForEntity(jsonServerUrl + "/availability", List.class);
		return responseEntity.getBody();
	}

	@Override
	public List<Flight> searchFlights(String originCode, String destinationCode, Date departDate,
			Integer noOfPassenger) {
		// originCode, destinationCode,date and noOfPassenger will be utilized here to
		// fetch flights.

		ResponseEntity<Flight[]> responseEntity = restTemplate.getForEntity(jsonServerUrl + "/flights", Flight[].class);
		Flight[] flightArr = responseEntity.getBody();
		List<Flight> flights = Arrays.asList(flightArr);

		flights.forEach(flight -> {
			flight.setOrigin(getOriginsByCode(flight.getOriginCode()));
			flight.setDestination(getDestinationsByCode(flight.getDestinationCode()));
		});
		return flights;
	}

	@Override
	public Flight getFlightInfoForCheckout(String id) {
		Flight[] flights = restTemplate.getForEntity(jsonServerUrl + "/flights?id=" + id, Flight[].class).getBody();
		if (flights.length > 0) {
			Flight flight = flights[0];
			Booking[] bookings = restTemplate.getForEntity(jsonServerUrl + "/booking?flightId=" + id, Booking[].class)
					.getBody();
			List<Seat> seats = new ArrayList<Seat>();
			for (Booking booking : bookings) {
				for (Seat seat : booking.getSeatAllocation()) {
					seats.add(seat);
				}
			}
			flight.setBookedSeats(seats);
			return flight;
		} else {
			return null;
		}
	}

	@Override
	public List<ClassInfo> getFlightClasses() {
		ResponseEntity<List> responseEntity = new RestTemplate().getForEntity(jsonServerUrl + "/flightClass",
				List.class);
		List<ClassInfo> response = responseEntity.getBody();
		return response;
	}

	@Override
	public void checkout(CheckoutForm checkoutForm) {
		Map<String, Object> booking = new HashMap<String, Object>();
		booking.put("id", UUID.randomUUID().toString());
		booking.put("bookingId", UUID.randomUUID().toString());
		booking.put("userId", 1);
		booking.put("flightId", checkoutForm.getFlightId());
		List<Map<String, String>> seatAllocation = new ArrayList<Map<String, String>>();
		checkoutForm.getSeats().forEach(seat -> {
			Map<String, String> seatObj = new HashMap<String, String>();
			seatObj.put("seatNumber", seat);
			seatObj.put("flightClass", checkoutForm.getFlightClass());
			seatObj.put("travelMood", checkoutForm.getTravelMood());
			seatAllocation.add(seatObj);
		});
		booking.put("seatAllocation", seatAllocation);

		ResponseEntity<String> result = restTemplate.postForEntity(jsonServerUrl + "/booking", booking, String.class);

	}

}
