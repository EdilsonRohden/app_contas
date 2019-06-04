<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>Descrição</th>
        <th>Tipo</th>
        <th>Valor</th>
      </tr>
      <tr v-for="mov in acount.moves" :key="mov._id">
        <td>{{ mov.description }}</td>
        <td>{{ mov.tipo }}</td>
        <td>{{ mov.value }}</td>
      </tr>
    </table>
    <div class="saldo" v-show="this.acount.moves">
      <p>Total Crédito: {{ result.tc }}</p>
      <p>Total Débito: {{ result.td }}</p>
      <p>Saldo: {{ result.ts }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type: String,
      required: true
    }
  },

  data(){
    return{
      token: '',
      acount: {},
      acountArray: [],
      result:{
        td: 0,
        tc: 0,
        ts: 0
      }
    }
  },
  created(){
    this.acount._id = this.id;
    this.token = localStorage.getItem('token');
    this.recebeDados();
  },
  methods:{
    recebeDados(){
      this.$http.get(('acounts/'  + this.acount._id), { headers: { 'Authorization': this.token } })
        .then(function(res){
          this.acountArray = res.body.acount;
          this.calcula();
        },function(err){
          console.log(err);
        }
        );
    },
    calcula(){
      this.acountArray.forEach(conta =>{
        this.acount = conta;
        this.acount.moves.forEach(mov => {
          if (mov.tipo == 'D'){
            this.result.td = this.result.td + parseInt(mov.value);
          }else{
            this.result.tc = this.result.tc + parseInt(mov.value);
          }
        });
        this.result.ts = this.result.tc - this.result.td;
      });
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
  .table {
    text-align: center;
    width: 97%;
  }

  tr {
    margin: 20px;
  }
  th {
    border: solid rgb(111, 196, 104);
  }
  td {
    border: solid rgb(111, 196, 104);
  }
  .saldo {
    float: left;
    text-align: center;
    margin: 10px;
  }
</style>
