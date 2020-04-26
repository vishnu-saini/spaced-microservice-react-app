package com.sapient.spacext.model;

import java.util.Date;

public class TravelDateInfo {

	private Date travelDate;
	private Integer minPrice;
	private Boolean isSoldOut;
	private String originCode;
	private String destinationCode;

	public TravelDateInfo() {
		super();
	}

	public TravelDateInfo(Date travelDate, Integer minPrice, Boolean isSoldOut, String originCode,
			String destinationCode) {
		super();
		this.travelDate = travelDate;
		this.minPrice = minPrice;
		this.isSoldOut = isSoldOut;
		this.originCode = originCode;
		this.destinationCode = destinationCode;
	}

	public Date getTravelDate() {
		return travelDate;
	}

	public void setTravelDate(Date travelDate) {
		this.travelDate = travelDate;
	}

	public Integer getMinPrice() {
		return minPrice;
	}

	public void setMinPrice(Integer minPrice) {
		this.minPrice = minPrice;
	}

	public Boolean getIsSoldOut() {
		return isSoldOut;
	}

	public void setIsSoldOut(Boolean isSoldOut) {
		this.isSoldOut = isSoldOut;
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

}
