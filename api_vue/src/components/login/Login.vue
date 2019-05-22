<template>
    <div>
        <form @submit.prevent="authenticate()">

            <div>
                <label for="login">Login:</label>
                <input name="login" @input="user.login = $event.target.value" />
            </div>
            <div>
                <label for="password">Senha:</label>
                <input name="password" @input="user.password = $event.target.value"/>
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
                .then( res => res.json().then(data => console.log(data)), err => err.json().then(data => console.log(data)) )

        }
    },
    
}
</script>

<style scoped>
    
</style>