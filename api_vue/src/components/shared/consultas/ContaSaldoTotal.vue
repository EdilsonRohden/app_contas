<template>
    <div>
      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Saldo Total</h5>
            <p class="card-text">Total Crédito: {{ result.totalCredito }} R$</p>
            <p class="card-text">Total Débito: {{ result.totalDebito }} R$</p>
            <p class="card-text">Saldo Total: {{ result.totalSaldo }} R$</p>
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
