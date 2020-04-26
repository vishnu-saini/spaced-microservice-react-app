package com.sapient.spacext.model;

import java.util.List;

public class CheckoutForm {
	private String flightId;
	private String travelMood;
	private String flightClass;
	private Integer totalSeats;
	private Float totalPrice;
	private List<String> seats;

	public CheckoutForm() {
		super();
	}

	public CheckoutForm(String flightId, String travelMood, String flightClass, Integer totalSeats, Float totalPrice,
			List<String> seats) {
		super();
		this.flightId = flightId;
		this.travelMood = travelMood;
		this.flightClass = flightClass;
		this.totalSeats = totalSeats;
		this.totalPrice = totalPrice;
		this.seats = seats;
	}

	public String getFlightId() {
		return flightId;
	}

	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}

	public String getTravelMood() {
		return travelMood;
	}

	public void setTravelMood(String travelMood) {
		this.travelMood = travelMood;
	}

	public Integer getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(Integer totalSeats) {
		this.totalSeats = totalSeats;
	}

	public Float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public List<String> getSeats() {
		return seats;
	}

	public void setSeats(List<String> seats) {
		this.seats = seats;
	}

	public String getFlightClass() {
		return flightClass;
	}

	public void setFlightClass(String flightClass) {
		this.flightClass = flightClass;
	}

}
