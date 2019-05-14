package com.edilson.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public abstract class ApiDao {

	private String url;
	private String db;
	private String user;
	private String password;
	private String port;
	protected Connection client;

	public void createConnection() {
		try {
			
			this.url = "jdbc:postgresql://localhost";
			this.port = ":5432";
			this.user = "postgres";
			this.password = "postgres";
			this.db = "/api_contas";
			
			
			this.client = DriverManager.getConnection(url + port + db, user, password);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void closeConnection(){
		try {
			this.client.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
 
}
