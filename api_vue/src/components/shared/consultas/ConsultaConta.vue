<template>
  <div class="container">
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th scope="col">Descrição <span class="glyphicon glyphicon-chevron-up" ></span></th>
          <th scope="col">Tipo</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="mov in acount.moves" :key="mov._id">
          <td>{{ mov.description }}</td>
          <td>{{ mov.tipo }}</td>
          <td>{{ mov.value }}</td>
        </tr>
      </tbody>
    </table>
    <div class="panel panel-default" v-show="this.acount.moves">
      <div class="panel-heading">Totalizador da Conta</div>
      <div class="panel-body">
        <table class="table table-bordered">
          <tbody>
            <tr scope="row">
              <td>Total Crédito:</td>
              <td>{{ result.tc }}</td>
            </tr>
            <tr scope="row">
              <td>Total Débito</td>
              <td>{{ result.td }}</td>
            </tr>
            <tr scope="row">
              <td>Saldo</td>
              <td>{{ result.ts }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
</style>
