package com.sapient.spacext.model;

public class ClassInfo {
	private String label;
	private String value;
	private Integer seats;

	public ClassInfo() {
	}

	public String getLabel() {
		return label;
	}

	public ClassInfo(String label, String value, Integer seats) {
		super();
		this.label = label;
		this.value = value;
		this.seats = seats;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Integer getSeats() {
		return seats;
	}

	public void setSeats(Integer seats) {
		this.seats = seats;
	}

}
