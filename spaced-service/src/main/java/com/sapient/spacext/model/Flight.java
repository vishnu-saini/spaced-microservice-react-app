package com.sapient.spacext.model;

import java.util.List;

public class Flight {
	private String id;
	private String originCode;
	private String destinationCode;
	private String departDate;
	private String startTime;
	private String endTime;
	private Integer durationInMin;
	private FlightClass flightClass;
	private Origin origin;
	private Destination destination;
	private List<Seat> bookedSeats;

	public Flight() {
		super();
	}

	public Flight(String id, String originCode, String destinationCode, String departDate, String startTime,
			String endTime, Integer durationInMin, FlightClass flightClass, Origin origin, Destination destination,
			List<Seat> bookedSeats) {
		super();
		this.id = id;
		this.originCode = originCode;
		this.destinationCode = destinationCode;
		this.departDate = departDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.durationInMin = durationInMin;
		this.flightClass = flightClass;
		this.origin = origin;
		this.destination = destination;
		this.bookedSeats = bookedSeats;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getOriginCode() {
		return originCode;
	}

	public void setOriginCode(String originCode) {
		this.originCode = originCode;
	}

	public String getDestinationCode() {
		return destinationCode;
	}

	public void setDestinationCode(String destinationCode) {
		this.destinationCode = destinationCode;
	}

	public String getDepartDate() {
		return departDate;
	}

	public void setDepartDate(String departDate) {
		this.departDate = departDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public Integer getDurationInMin() {
		return durationInMin;
	}

	public void setDurationInMin(Integer durationInMin) {
		this.durationInMin = durationInMin;
	}

	public FlightClass getFlightClass() {
		return flightClass;
	}

	public void setFlightClass(FlightClass flightClass) {
		this.flightClass = flightClass;
	}

	public Origin getOrigin() {
		return origin;
	}

	public void setOrigin(Origin origin) {
		this.origin = origin;
	}

	public Destination getDestination() {
		return destination;
	}

	public void setDestination(Destination destination) {
		this.destination = destination;
	}

	public List<Seat> getBookedSeats() {
		return bookedSeats;
	}

	public void setBookedSeats(List<Seat> bookedSeats) {
		this.bookedSeats = bookedSeats;
	}

}
