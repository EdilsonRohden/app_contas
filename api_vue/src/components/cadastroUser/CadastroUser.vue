<template>
    <div>
        <form @submit.prevent="cadastrar()">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" @input="user.nome = $event.target.value" :value="user.nome"/>
            </div>
            <div>
                <label for="login">Login:</label>
                <input type="text" name="login" id="login" @input="user.login = $event.target.value" :value="user.login"/>
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="text" name="password" id="password" @input="user.password = $event.target.value" :value="user.password"/>
            </div>

            <button @click="cadastrar()" >Salvar</button>
        </form>

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
                .then(res => console.log(res), err => err.json().then(data => console.log(data)));

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
    
</style>