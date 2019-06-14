<template>
    <div class="body">
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <strong>Saldo Total Por Contas</strong>
          </div>
          <div class="panel-body">
            <table class="table table-bordered">
              <thead class="table-light">
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Saldo Por Conta</th>
                </tr>
              </thead>
              <tbody>
                <tr scope="row" v-for="conta in result" :key="conta._id">
                    <td>{{ conta.description }}</td>
                    <td>{{ conta.saldo }}</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Saldo Total da Carteira:</strong> {{ saldoTotal }}</p>          
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            result: [],
            saldoTotal: 0,
            token: '',

        }
    },

    created(){

      this.token = localStorage.getItem('token');
      this.$http.get('acounts/', { headers: { 'Authorization': this.token } })
        .then(
          function(res){
            this.calculaContasSaldo(res.body.acounts);
            this.calculaSaldo();
          },
          function(err){ console.log(err) }
        );
    },

    methods:{
        calculaContasSaldo(acounts){
            acounts.forEach(conta => {
                conta.saldo = 0;
                conta.moves.forEach(mov => {
                    if( mov.tipo == 'D' ){
                        conta.saldo = conta.saldo - parseInt(mov.value);
                    }else{
                        conta.saldo = conta.saldo + parseInt(mov.value);
                    }
                });
                this.result.push(conta);
            });
        },
        calculaSaldo(){
            this.result.forEach(conta => {
                this.saldoTotal = this.saldoTotal + (conta.saldo);
            });
        }
    }

}
</script>

<style scoped>
  .container {
    margin-top: 20px;
    text-align: center;
  }

</style>
