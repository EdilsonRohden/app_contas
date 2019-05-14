package com.edilson.services.cadastro;

import com.edilson.dao.UsuarioDao;
import com.edilson.models.Usuario;

public class CadastroUsuario {
	
	public void cadastrar(Usuario user) {
		
		UsuarioDao userDao = new UsuarioDao();
		if(userDao.hasId(user)) {
			userDao.update(user);
		}else {
			userDao.insert(user);
		}
	}
	
}
