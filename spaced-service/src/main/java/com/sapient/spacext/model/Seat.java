package com.sapient.spacext.model;

public class Seat {

	private String seatNumber;
	private String flightClass;
	private String travelMood;

	public Seat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Seat(String seatNumber, String flightClass, String travelMood) {
		super();
		this.seatNumber = seatNumber;
		this.flightClass = flightClass;
		this.travelMood = travelMood;
	}

	public String getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}

	public String getFlightClass() {
		return flightClass;
	}

	public void setFlightClass(String flightClass) {
		this.flightClass = flightClass;
	}

	public String getTravelMood() {
		return travelMood;
	}

	public void setTravelMood(String travelMood) {
		this.travelMood = travelMood;
	}

}
