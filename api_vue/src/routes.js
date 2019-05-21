import Login from './components/login/Login';
import CadastroUser from './components/cadastroUser/CadastroUser';
import CadastroContas from './components/cadastroContas/CadastroContas';

export const routes = [
    { path: '/', component: Login, titulo: 'Login' },
    { path: '/CadastroUser', component: CadastroUser, titulo: 'Cadastro de Usuario' },
    { path: '/CadastroContas', component: CadastroContas , titulo: 'Cadastro de Contas'}
];