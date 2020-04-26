package com.sapient.spacext.web;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sapient.spacext.model.CheckoutForm;
import com.sapient.spacext.model.ClassInfo;
import com.sapient.spacext.model.Destination;
import com.sapient.spacext.model.Flight;
import com.sapient.spacext.model.Origin;
import com.sapient.spacext.model.TravelDateInfo;
import com.sapient.spacext.service.SpacedService;

@CrossOrigin
@RestController
public class Controller {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private SpacedService spacedService;

	@GetMapping("/origin")
	public List<Origin> getOrigins(@RequestParam String searchString) {
		return spacedService.getOriginsByQuery(searchString);
	}

	@GetMapping("/destination")
	public List<Destination> getDestinations() {
		return spacedService.getDestinations();
	}

	@GetMapping("/availibility")
	public List<TravelDateInfo> getAvailibility(@RequestParam String originCode, @RequestParam String destinationCode) {
		return spacedService.getTravelDateInfosByOriginAndDestination(originCode, destinationCode);
	}

	@GetMapping("/searchFlights")
	public List<Flight> searchFlights(@RequestParam String originCode, @RequestParam String destinationCode,
			@RequestParam @DateTimeFormat(pattern = "yyyy-dd-MM") Date departDate,
			@RequestParam Integer noOfPassenger) {
		return spacedService.searchFlights(originCode, destinationCode, departDate, noOfPassenger);
	}

	@GetMapping("/fetchBookingInfo")
	public Flight getBookingInfo(@RequestParam String flightId) {
		return spacedService.getFlightInfoForCheckout(flightId);
	}

	@GetMapping("/flightClasses")
	public List<ClassInfo> getFlightClasses() {
		return spacedService.getFlightClasses();
	}

	@PostMapping("/checkout")
	public String checkout(@RequestBody CheckoutForm checkoutForm) {
		spacedService.checkout(checkoutForm);
		return "success";
	}

}
