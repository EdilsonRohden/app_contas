<template>
    <div class="container" >
        <p>Total Crédito: {{ result.totalCredito }} R$</p>
        <p>Total Débito: {{ result.totalDebito }} R$</p>
        <p>Saldo Total: {{ result.totalSaldo }} R$</p>
    </div>
</template>

<script>
export default {

    props: ['acount'],

    data(){
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
            this.result.totalSaldo = this.result.totalDebito - this.result.totalCredito; 
        }
    },

}
</script>

<style scoped>
    
</style>