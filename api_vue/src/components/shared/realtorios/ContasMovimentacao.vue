<template>
    <div class="container">
        
        <table class="table table-bordered" >
            <thead class="thead-light">
                <tr>
                    <th scope="col">Descrição da conta</th>
                    <th scope="col">Saldo</th>
                </tr>
            </thead>
            <tbody>
                <tr scope="row" v-for="res in result" :key="res.description">
                    <td>{{ res.description }}</td>
                    <td>{{ res.value }}}</td>
                </tr>
            </tbody>
        </table>

        <p>Saldo: {{ totalsaldo }}</p>
    </div>
</template>

<script>
export default {


    created(){
      this.token = localStorage.getItem('token');
      this.$http.get('acounts/', { headers: { 'Authorization': this.token } })
        .then(
          function(res){ this.acounts = res.body.acounts;
          },
          function(err){ console.log(err) }
        );
    },

    data(){
        return{
            results: [],
            totalSaldo: 0
        }
    },
    methods: {
        calcula(acount){
            var value = 0;
            acount.moves.forEach(mov => {
                if ( mov.tipo == 'D' ){
                    value = value + parseInt(mov.value);
                }else{
                    value = value - parseInt(mov.value);
                }
            });

            results.push({
                value,
                description: acount.description
            });
        }
    },
}
</script>

<style scoped>

</style>
