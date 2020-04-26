package com.sapient.spacext.model;

public class TravelMood {
	private String label;
	private String value;

	public TravelMood() {
	}

	public String getLabel() {
		return label;
	}

	public TravelMood(String label, String value) {
		super();
		this.label = label;
		this.value = value;
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
}
