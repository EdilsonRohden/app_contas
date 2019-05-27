<template>
    <div class="container">
      <div class="contas">
        <div class="card w-100">
          <ul class="card-body">
            <div v-for='acount in acounts' :key="acount._id" >
              <router-link :to="{ name: 'cadastroMovimento', params : { id: acount._id } }">
                <p class="card-text">{{ acount.description }}</p>
              </router-link>
              <p class="card-text">Data de criação: {{ acount.createdAt }}</p>
            </div>
          </ul>
        </div>
      </div>
      <div class="saldo-total">
        <total-saldo/>
      </div>
    </div>
</template>

<script>

import ContaSaldoTotal from '../shared/consultas/ContaSaldoTotal';
import ContaMovimentacao from '../shared/consultas/ContaMovimentacao';

export default {

  created(){
    this.token = localStorage.getItem('token');
    this.$http.get('acounts/', { headers: { 'Authorization': this.token } })
      .then(
        function(res){ this.acounts = res.body.acounts;
        },
        function(err){ console.log(err) }
      );
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
  .saldo-total{
    float: right;
  }
  .contas{
    float: left;
  }
</style>
