<template>
    <div class="container">

        <table class="table table-bordered" v-for="conta in acounts" :key="conta._id">
            <thead class="table-light">
                <tr> <strong> {{ conta.description }} </strong></tr>
            </thead>
            <tbody>
              <tr scope="row">
                  <th>Descriçao</th>
                  <th>Tipo</th>
                  <th>Valor</th>
              </tr>
              <tr scope="row"  v-for="mov in conta.moves" :key="mov.description">
                  <td>{{ mov.description }}</td>
                  <td>{{ mov.tipo }}</td>
                  <td>{{ mov.value }}</td>
              </tr>
              <p><strong>Total Crédito:</strong> {{ conta.tc }}</p>
              <p><strong>Total Debito:</strong> {{ conta.td }}</p>
              <p><strong>Total Saldo:</strong> {{ conta.st }}</p>
            </tbody>
        </table>
        <conta-saldo-total />
    </div>
</template>

<script>

  import ContaSaldoTotal from './ContaSaldoTotal';

export default {

    components:{
      'conta-saldo-total': ContaSaldoTotal
    },

    data: function(){
        return {
            result: {
                totalCredito: 0,
                totalDebito: 0,
                totalSaldo: 0
            },
            token: '',
            acounts: []
        }
    },

    created() {
      this.token = localStorage.getItem('token');
      this.$http.get('acounts/', { headers: { 'Authorization': this.token } })
      .then(
          function(res){
              this.calculaTodos(res.body.acounts);
          },
          function(err){ console.log(err) }
      );
    },

    methods: {
        calcula(acount){
            acount.td = 0;
            acount.tc = 0
            acount.moves.forEach(mov => {
                if ( mov.tipo == 'D' ){
                    acount.td = acount.td + parseInt(mov.value);
                    this.result.totalDebito = this.result.totalDebito + parseInt(mov.value);
                }else{
                    acount.tc = acount.tc + parseInt(mov.value);
                    this.result.totalCredito = this.result.totalCredito + parseInt(mov.value);
                }
            });

            acount.st = acount.tc - acount.td;
            return acount;
        },
        calculaTodos(acounts){
            acounts.forEach(acount => {
                this.acounts.push(this.calcula(acount));
            });
            this.result.totalSaldo = this.result.totalCredito - this.result.totalDebito;
        }
    },
}
</script>

<style scoped>
  .container{
    text-align: center;
    margin-top: 20px;
  }
  p{
    text-align: left;
    margin: 10px;
  }
  .descricao{
    margin-bottom: 20px;
  }
</style>