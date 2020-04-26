package com.sapient.spacext.model;

public class SeatPriceInfo {

	private Integer totalSeats;
	private String currency;
	private Integer priceInBaseUnit;
	private Integer availableSeats;

	public SeatPriceInfo() {
		super();
	}

	public SeatPriceInfo(Integer totalSeats, String currency, Integer priceInBaseUnit, Integer availableSeats) {
		super();
		this.totalSeats = totalSeats;
		this.currency = currency;
		this.priceInBaseUnit = priceInBaseUnit;
		this.setAvailableSeats(availableSeats);
	}

	public Integer getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(Integer totalSeats) {
		this.totalSeats = totalSeats;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Integer getPriceInBaseUnit() {
		return priceInBaseUnit;
	}

	public void setPriceInBaseUnit(Integer priceInBaseUnit) {
		this.priceInBaseUnit = priceInBaseUnit;
	}

	public Integer getAvailableSeats() {
		return availableSeats;
	}

	public void setAvailableSeats(Integer availableSeats) {
		this.availableSeats = availableSeats;
	}

}
