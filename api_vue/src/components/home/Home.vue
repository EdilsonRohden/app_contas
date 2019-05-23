<template>
    <div>
      <ul>
        <div v-for='acount in acounts' :key="acount._id" >
            <div class="container">
              <router-link :to="{ name: 'cadastroMovimento', params : { id: acount._id } }">
                <p>{{ acount.description }}</p>
              </router-link>
              <mov-conta :conta="acount"/>
              <p>{{ acount.createdAt }}</p>
            </div>
        </div>
      </ul>
      <total-saldo :acount="acounts" />
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
    margin: 10px;
    border: 5px;
  }
</style>
