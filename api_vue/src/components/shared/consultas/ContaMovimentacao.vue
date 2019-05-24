<template>
    <div>

        <table v-for="conta in acounts" :key="conta._id">
            <thead>
                <tr>Descrição da Conta: {{ conta.description }}</tr>
            </thead>
            <tr>
                <th>Descriçao</th>
                <th>Tipo</th>
                <th>Valor</th>
            </tr>
            <tr v-for="mov in conta.moves" :key="mov.description">
                <td>{{ mov.description }}</td>
                <td>{{ mov.tipo }}</td>
                <td>{{ mov.value }}</td>
            </tr>
            <p>Total Crédito {{ conta.tc }}</p>
            <p>Total Débito {{ conta.td }}</p>
            <p>Saldo: {{ conta.st }}</p>
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

            acount.st = acount.td - acount.tc;
            return acount;
        },
        calculaTodos(acounts){
            acounts.forEach(acount => {
                this.acounts.push(this.calcula(acount));
            });
            this.result.totalSaldo = this.result.totalDebito - this.result.totalCredito;
        }
    },
}
</script>

<style scoped>

</style>
