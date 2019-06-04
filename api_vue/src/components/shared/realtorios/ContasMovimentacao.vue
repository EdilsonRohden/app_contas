<template>
    <div class="container">
        <table class="table" >
            <tr>
                <th>Descrição da conta</th>
                <th>Saldo</th>
            </tr>
            <tr v-for="res in result" :key="res.description">
                <td>{{ res.description }}</td>
                <td>{{ res.value }}}</td>
            </tr>
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
  .container{

  }
</style>
