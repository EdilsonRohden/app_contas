<template>
    <div>
    <div class="panel panel-default">
      <div class="panel-heading"><strong>Saldo Total</strong></div>
      <div class="panel-body">
        <table class="table table-bordered">
          <tbody>
            <tr scope="row">
              <td>Total Crédito</td>
              <td>{{ result.totalCredito }}</td>
            </tr>
            <tr scope="row">
              <td>Total Débito</td>
              <td>{{ result.totalDebito }}</td>
            </tr>
            <tr scope="row">
              <td>Saldo Total</td>
              <td>{{ result.totalSaldo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
</template>

<script>
export default {

    data: function(){
        return {
            result: {
                totalCredito: 0,
                totalDebito: 0,
                totalSaldo: 0
            },
            token: '',
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
            acount.moves.forEach(mov => {
                if ( mov.tipo == 'D' ){
                    this.result.totalDebito = this.result.totalDebito + parseInt(mov.value);
                }else{
                    this.result.totalCredito = this.result.totalCredito + parseInt(mov.value);
                }
            });
        },
        calculaTodos(acounts){
            acounts.forEach(acount => {
                this.calcula(acount);
            });
            this.result.totalSaldo = this.result.totalCredito - this.result.totalDebito;
        }
    },

}
</script>

<style scoped>

</style>
