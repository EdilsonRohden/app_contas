<template>
    <div>
        <table>
            <tr>
                <th>Descrição</th>
                <th>Saldo</th>                
            </tr>
            <tr v-for="conta in result" :key="conta._id">
                <td>{{ conta.description }}</td>
                <td>{{ conta.saldo }}</td>
            </tr>
        </table>
        <p>Saldo: {{ saldoTotal }}</p>
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
                        conta.saldo = conta.saldo + parseInt(mov.value);
                    }else{
                        conta.saldo = conta.saldo - parseInt(mov.value);
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
    
</style>