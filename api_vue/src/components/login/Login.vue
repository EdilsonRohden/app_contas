<template>
    <div class="container">
        <form @submit.prevent="authenticate()">

            <div>
                <input name="login" id="input-login" placeholder="login" @input="user.login = $event.target.value" />
            </div>
            <div>
                <input type="password" id="input-password" placeholder="senha" name="password" @input="user.password = $event.target.value"/>
            </div>
            <button class="btn btn-success" id="btn-login" >Login</button>

        </form>
            <div>
                <router-link to='/CadastroUser'>Criar conta</router-link>
            </div>
            <div class="erro">
                <p :v-show="erro" >{{ erro }}</p>
            </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            user: {
                nome: '',
                login: '',
                password: ''
            },
            erro: ''
        }
    },

    methods: {
        authenticate(){

            this.$http.post('users/authenticate', this.user)
                .then( function(res){
                  res.json().then(function(data){

                    data.token = "Bearer ".concat(data.token);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user_data', JSON.stringify(data.user));
                  });
                  return this.$router.push('/home');
                },
                function(err){
                  err.json().then(data => { 
                      console.log(data);
                      this.erro = data.error;
                    });
                });

        }
    },

}
</script>

<style scoped>
    .container{
        text-align: center;
    }
    .erro{
        color: rgb(207, 62, 62);
    }
    #btn-login{
        margin: 10px;
    }
    #input-login{
        margin: 5px;
    }

</style>
