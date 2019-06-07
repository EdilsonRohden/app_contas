<template>
    <div class="container">
      <div class="contas">
        <div class="card w-100">
          <ul class="card-body">
            <div v-for='acount in acounts' :key="acount._id" class="panel panel-default">
              <div class="panel-heading">
                <router-link :to="{ name: 'cadastroMovimento', params : { id: acount._id } }">
                  <span class="glyphicon glyphicon-piggy-bank"></span>
                </router-link>
              </div>
              <div class="panel-body">
                  <p class="card-text">{{ acount.description }}</p>
                <p class="card-text">Data de criação: {{ acount.createdAt }}</p>
              </div>
            </div>

            <div class="add-conta" >
              <router-link to="/CadastroContas"><button class="btn btn-primary" >Adiconar Conta</button></router-link>
            </div>

          </ul>
        </div>
      </div>
      <div class="saldo-total">
        <total-saldo/>
      </div>
      <div class="relatorios" >
        <router-link to="/relatorios/contaMovimetacao"><button class="btn">ContaMovimentacao</button></router-link>
        <router-link to="/relatorios/ContasSaldo"><button class="btn" >Conta Saldo</button></router-link>
      </div>
    </div>
</template>

<script>

import ContaSaldoTotal from '../shared/consultas/ContaSaldoTotal';
import ContaMovimentacao from '../shared/consultas/ContaMovimentacao';

export default {

  created(){
    this.getContas();
  },
  methods: {
    getContas(){
      this.getToken()
      this.$http.get('acounts/', { headers: { 'Authorization': this.token } })
        .then(
          function(res){ this.acounts = res.body.acounts;
          },
          function(err){ console.log(err) }
        );
    },
    getToken(){
      this.token = localStorage.getItem('token');
    }
  },

  components:{
    'total-saldo': ContaSaldoTotal,
    'mov-conta': ContaMovimentacao
  },

  data(){
    return{
      token: '',
      acounts: []
    }
  }

}
</script>

<style scoped>
  .container{
    text-align: center;
  }
  .saldo-total {
    border: solid rgb(106, 248, 106);
  }
  .contas {
    margin-top: 20px;
  }
  .iten-conta {
    margin-top: 5px;
  }
  .card-body {
    padding-left: 0px;
  }
  .add-conta {
    margin: 10px;
  }
  .relatorios {
    margin-top: 20px;
  }
</style>
