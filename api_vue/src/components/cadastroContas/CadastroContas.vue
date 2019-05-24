<template>
    <div>
        <label for="description">Descrição</label>
        <input type="text" name="description" id="description" v-model="acount.description" />
        <div>
          <button @click="cadastraConta()" >Cadastrar</button>
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

</style>
