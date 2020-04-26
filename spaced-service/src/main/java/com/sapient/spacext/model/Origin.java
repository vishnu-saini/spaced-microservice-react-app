package com.sapient.spacext.model;

public class Origin {
	private String name;
	private String fullName;
	private String code;

	public Origin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Origin(String name, String fullName, String code) {
		super();
		this.name = name;
		this.fullName = fullName;
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
