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

        console.log(this.token);

        this.$http.post('acounts/acount', this.acount, { headers: { 'Authorization': this.token } })
          .then(function(res){
            res.json().then(data => console.log(data));
          }, err => err.json().then(data => console.log(data)));
      },
    },
    created(){
      this.token = localStorage.getItem('token');
    }
}
</script>

<style scoped>

</style>
