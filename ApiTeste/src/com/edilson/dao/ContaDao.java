package com.edilson.dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.edilson.models.Conta;

public class ContaDao extends ApiDao{
	
	public void salvar(Conta conta, int user) {
		createConnection();
		
		String sql =
			"INSERT INTO contas (cta_id, cta_descricao, usr_id) VALUES (" +
			conta.getId() + "," + conta.getDescription() + "," + user + ")";
		;
		try {
			PreparedStatement stmt = client.prepareStatement(sql, user);
			stmt.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		closeConnection();;
	}
	
}
