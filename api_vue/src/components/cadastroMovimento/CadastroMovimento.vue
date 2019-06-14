<template>
    <div class="container">
        <div class="relatorio">
          <consulta-conta :id="this.$route.params.id" />
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <p><strong>Cadastrar Novo Movimento</strong></p>
          </div>
          <div class="panel-body">
            <form @submit.prevent="" class="formulario" >
                <div class="elemento">
                    <input type="text" placeholder="Descrição do movimento" v-model="mov.description" />
                </div>
                <div class="elemento">
                    <select name="tipo" id="tipo" v-model="mov.tipo" >
                        <option value="D" selected>Débito</option>
                        <option value="C">Crédito</option>
                    </select>
                </div>
                <div class="elemento">
                    <input placeholder="valor" type="number" v-model="mov.value" />
                </div>
                <div class="elemento">
                    <button @click="salvar()" ><span class="glyphicon glyphicon-plus"></span></button>
                </div>
            </form>
          </div>
        </div>
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
                return this.$router.push('/home');
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
  .formulario {
    margin-top: 20px;
  }

  .container {
  }

  .relatorio {
    margin-top: 10px;
  }
  .elemento {
    margin: 10px;
  }

</style>
