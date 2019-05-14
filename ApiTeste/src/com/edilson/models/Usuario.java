package com.edilson.models;

import java.util.ArrayList;
import java.util.List;

public class Usuario {

	private int id;
	private String nome;
	private String login;
	private String senha;
	private List<Conta> contas;
	
	
	public void addConta(Conta conta) {
		
		if (this.contas == null) {
			this.contas = new ArrayList<Conta>();
		}
		
		this.contas.add(conta);
	}
	
	public List<Conta> getContas(){
		return this.contas;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
