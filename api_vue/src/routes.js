import Login from './components/login/Login';
import CadastroUser from './components/cadastroUser/CadastroUser';
import CadastroContas from './components/cadastroContas/CadastroContas';
import Home from './components/home/Home';
import CadastroMovimento from './components/cadastroMovimento/CadastroMovimento';

export const routes = [
    { path: '/', name: 'login', component: Login, titulo: 'Login' },
    { path: '/CadastroUser', name: 'cadastroUser', component: CadastroUser, titulo: 'Cadastro de Usuario' },
    { path: '/CadastroContas', name: 'cadastroContas', component: CadastroContas , titulo: 'Cadastro de Contas'},
    { path: '/home', name: 'home', component : Home, titulo: 'Home' },
    { path: '/cadastroMovimento', name: 'cadastroMovimento', component: CadastroMovimento, titulo: 'Cadastro de movimentos' }
];