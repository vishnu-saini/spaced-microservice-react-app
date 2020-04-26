package com.sapient.spacext.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FlightClass {
	private SeatPriceInfo economy;
	private SeatPriceInfo business;
	@JsonProperty("1st")
	private SeatPriceInfo first;

	public FlightClass() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FlightClass(SeatPriceInfo economy, SeatPriceInfo business, SeatPriceInfo first) {
		super();
		this.economy = economy;
		this.business = business;
		this.first = first;
	}

	public SeatPriceInfo getEconomy() {
		return economy;
	}

	public void setEconomy(SeatPriceInfo economy) {
		this.economy = economy;
	}

	public SeatPriceInfo getBusiness() {
		return business;
	}

	public void setBusiness(SeatPriceInfo business) {
		this.business = business;
	}

	public SeatPriceInfo getFirst() {
		return first;
	}

	public void setFirst(SeatPriceInfo first) {
		this.first = first;
	}

}
