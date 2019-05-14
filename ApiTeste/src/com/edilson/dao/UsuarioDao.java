package com.edilson.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.edilson.models.Usuario;

public class UsuarioDao extends ApiDao{

	public void insert(Usuario user) {
		createConnection();
		
		String sql = 
			"INSERT INTO usuarios (usr_id, usr_nome, usr_login, usr_senha) VALUES (" +
			user.getId() + "," + user.getNome() + "," + user.getLogin() + "," +user.getSenha() + ")";
		
		try {
			this.client.prepareStatement(sql, user.getId());
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		closeConnection();
	}
	
	public boolean hasId(Usuario user) {
		createConnection();
		
		String sql = "SELECT * FROM usuarios WHERE usr_id = " + user.getId();
		Integer usr_id;
		try {
			
			PreparedStatement stmt = this.client.prepareStatement(sql);
			ResultSet result = stmt.executeQuery();
			usr_id = result.getInt("usr_id");
			
			closeConnection();
			if(usr_id != null )
				return true;
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return false;
		
	}

	public void update(Usuario user) {
		createConnection();
		String sql = 
				"UPDATE usuarios SET usr_nome = " + user.getNome() + 
				", usr_login=" + user.getLogin() + 
				", usr_senha = " + user.getSenha() + 
				" WHERE usr_id = " + user.getId();
		
		try {
			PreparedStatement stmt = this.client.prepareStatement(sql);
			stmt.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		closeConnection();
	}
	
	
}
