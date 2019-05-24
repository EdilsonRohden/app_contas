<template>
  <div>
    <table>
      <tr>
        <th>Descrição</th>
        <th>Tipo</th>
        <th>Valor</th>
      </tr>
      <tr v-for="mov in acount.moves" :key="mov._id">
        <td>{{ mov.description }}</td>
        <td>{{ mov.tipo }}</td>
        <td>{{ mov.value }}</td>
      </tr>
    </table>
    <div v-show="!this.acount">
      <p>Total Crédito: {{ acount.tc }}</p>
      <p>Total Débito: {{ acount.td }}</p>
      <p>Saldo: {{ acount.ts }}</p>
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
      acount: {}
    }
  },
  created(){
    this.acount._id = this.id;
    console.log(this.id);
    this.token = localStorage.getItem('token');
    this.recebeDados();
  },
  methods:{
    recebeDados(){
      this.$http.get('acounts/' + this.acount._id, { headers: { 'Authorization': this.token } })
        .then(function(res){
          this.acount = res.body.acount;
          console.log(this.acount);
          if( this.acount != null && this.acount != undefined){
            this.calcula()
          }
        },function(err){
          console.log(err);
        }
        );
    },
    calcula(){
      this.acount.moves.forEach(mov => {
        if (mov.tipo == 'D'){
          this.acount.td = this.acount.td + parseInt(mov.value);
        }else{
          this.acount.tc = this.acount.tc + parseInt(mov.value);
        }
      });
      this.acount.ts = this.acount.td - this.acount.tc;
    }
  }
}
</script>

<style scoped>

</style>
