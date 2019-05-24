import Login from './components/login/Login';
import CadastroUser from './components/cadastroUser/CadastroUser';
import CadastroContas from './components/cadastroContas/CadastroContas';
import Home from './components/home/Home';
import CadastroMovimento from './components/cadastroMovimento/CadastroMovimento';
import ContaMovimentacao from './components/shared/consultas/ContaMovimentacao'

export const routes = [
    { path: '/', name: 'login', component: Login, titulo: 'Login', menu: true },
    { path: '/CadastroUser', name: 'cadastroUser', component: CadastroUser, titulo: 'Cadastro de Usuario', menu: true },
    { path: '/CadastroContas', name: 'cadastroContas', component: CadastroContas , titulo: 'Cadastro de Contas', menu: true},
    { path: '/home', name: 'home', component : Home, titulo: 'Home', menu: true },
    { path: '/cadastroMovimento/:id', name: 'cadastroMovimento', component: CadastroMovimento, titulo: 'Cadastro de movimentos', menu: false },
    { path: '/relatorios/contaMovimentacao', name: 'relatorio/contamovimentacao', component: ContaMovimentacao, titulo: 'Relatorio de movimentação', menu: true }
];
