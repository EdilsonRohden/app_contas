<template>
    <div class="container">
        <form class="frm-cadastro" @submit.prevent="cadastrar()">
            <div>
                <input placeholder="Nome" type="text" name="nome" id="nome" v-model="user.nome"/>
            </div>
            <div>
                <input placeholder="login" type="text" name="login" id="login" v-model="user.login"/>
            </div>
            <div>
                <input placeholder="password" type="password" name="password" id="password" v-model="user.password"/>
            </div>

            <button class="btn btn-success" id="btn-cadastrar" >Cadastrar</button>
            
        </form>
        <router-link to="/">Já tenho uma conta.</router-link>
    </div>
</template>
<script>
export default {

    data(){
        return{

            user:{
                nome: '',
                login: '',
                password: ''
            }
        }
    },

    methods:{
        cadastrar(){
            this.$http.post('users/user', this.user)
                .then(res => {
                  res.json().then(data => {
                    data.token = "Bearer ".concat(data.token);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user_data', JSON.stringify(data.user)); 
                  });
                  return this.$router.push('/home');
                  },err => err.json().then(data => console.log(data))
                );

            this.user = {
                nome: '',
                login: '',
                password: ''
            }
        }
    }

}
</script>

<style scoped>
    .container{
        text-align: center;
    }
    input{
        margin-top: 5px;
    }
    #btn-cadastrar{
        margin: 5px;
        width: 19%;
    }
</style>
