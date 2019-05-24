<template>
    <div>
        <div>
          <consulta-conta :id="this.$route.params.id" />
        </div>
        <form @submit.prevent="">
            <div>
                <label for="description">Descrição</label>
                <input type="text" name="description" id="description" v-model="mov.description" />
            </div>
            <div>
                <select name="tipo" id="tipo" v-model="mov.tipo" >
                    <option value="D" selected>Débito</option>
                    <option value="C">Crédito</option>
                </select>
            </div>
            <div>
                <label for="value">Valor</label>
                <input type="number" name="value" id="value" v-model="mov.value" />
            </div>
            <div>
                <button @click="salvar()" >Salvar</button>
            </div>
        </form>
    </div>
</template>

<script>
import ConsultaConta from '../shared/consultas/ConsultaConta';

export default {

    components:{
      'consulta-conta': ConsultaConta
    },

    data(){
        return{
            mov:{
                description: '',
                tipo: 'D',
                value: 0,
            },
            token : '',
            acount: {
              _id: ''
            }

        }
    },

    methods: {
        salvar(){
          const acount = this.acount;
          const description = this.mov.description;
          const value = this.mov.value;
          const tipo = this.mov.tipo;

          this.$http.post('moves/mov', { acount, description, value, tipo }, { headers: { 'Authorization': this.token } })
            .then(
              function(res){
                res.json().then(data => console.log(data));
              },function(err){
                console.log(err);
              }
            );
        }
    },
    created(){
      this.token = localStorage.getItem('token');
      this.acount._id = this.$route.params.id;
    }
}
</script>

<style scoped>

</style>
