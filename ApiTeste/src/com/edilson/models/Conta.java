package com.edilson.models;

import java.util.List;

public class Conta {

	private int id;
	private String description;
	private List<Movimento> movimentos;
	
	public Conta() {}
	
	public Conta(Integer id, String description, List<Movimento> movimentos) {
		this.id = id;
		this.description = description;
		this.movimentos = movimentos;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Movimento> getMovimentos() {
		return movimentos;
	}
	public void setMovimentos(List<Movimento> movimentos) {
		this.movimentos = movimentos;
	}
	
}
