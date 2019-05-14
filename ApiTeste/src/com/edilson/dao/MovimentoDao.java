package com.edilson.dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.edilson.models.Movimento;

public class MovimentoDao extends ApiDao{

	public void salvar(Movimento movimento, int conta) {
		createConnection();
		
		String sql = 
			"INSERT INTO movimentos (mov_id, cta_id, mov_tipo, mov_descricao, mov_valor) VALUES (" +
			conta + "," + movimento.getTipo() + "," + movimento.getDescricao() + "," + movimento.getValor() + ")";
		
		try {
			PreparedStatement stmt = this.client.prepareStatement(sql, conta);
			stmt.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		closeConnection();
	}
	
}
