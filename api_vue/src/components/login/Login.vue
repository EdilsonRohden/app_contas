<template>
    <div>
        <form @submit.prevent="authenticate()">

            <div>
                <label for="login">Login:</label>
                <input name="login" @input="user.login = $event.target.value" />
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" name="password" @input="user.password = $event.target.value"/>
            </div>
            <button>Login</button>

        </form>
            <div>
                <router-link to='/CadastroUser'>Criar conta</router-link>
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
            }
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
                },
                function(err){
                  err.json().then(data => console.log(data))
                });

        }
    },

}
</script>

<style scoped>

</style>
