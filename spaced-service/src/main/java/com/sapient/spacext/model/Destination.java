package com.sapient.spacext.model;

public class Destination {

	private String name;
	private String description;
	private String code;
	private String imgPath;

	public Destination() {
		super();
	}

	public Destination(String name, String description, String code, String imgPath) {
		super();
		this.name = name;
		this.description = description;
		this.code = code;
		this.imgPath = imgPath;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

}
