package com.sapient.spacext.model;

import java.util.List;

public class Booking {
	private String bookingId;
	private String userId;
	private String flightId;
	private List<Seat> seatAllocation;

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(String bookingId, String userId, String flightId, List<Seat> seatAllocation) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.flightId = flightId;
		this.seatAllocation = seatAllocation;
	}

	public String getBookingId() {
		return bookingId;
	}

	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFlightId() {
		return flightId;
	}

	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}

	public List<Seat> getSeatAllocation() {
		return seatAllocation;
	}

	public void setSeatAllocation(List<Seat> seatAllocation) {
		this.seatAllocation = seatAllocation;
	}

}
