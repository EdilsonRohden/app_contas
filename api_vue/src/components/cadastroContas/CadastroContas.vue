<template>
    <div class="container">
        <input class="input-descricao" type="text" name="description" id="description" placeholder="Descrição da Conta" v-model="acount.description" />
        <div>
          <button class="btn btn-success" @click="cadastraConta()" >Cadastrar</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        acount:{
          description: '',
          moves: []
        },
        token: ""
      }
    },
    methods: {
      cadastraConta(){
        this.$http.post('acounts/acount', this.acount, { headers: { 'Authorization': this.token } })
          .then(function(res){
            return this.$router.push('/home');
          }, err => err.json().then(data => console.log(data)));
      },
    },
    created(){
      this.token = localStorage.getItem('token');
      if(!this.token){
        this.$router.push('/');
      }
    }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }

  .input-descricao {
    margin: 10px;
  }
</style>
