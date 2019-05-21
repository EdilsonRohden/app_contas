<template>
    <div>
        <form @submit.prevent="cadastrar()">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="name" @input="user.name = $event.target.value" :value="user.name"/>
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
                name: '',
                login: '',
                password: ''
            }
        }
    },

    methods:{
        cadastrar(){
            this.$http.post('http://localhost:3000/users/user', this.user)
                .then(res => console.log(res), err => console.log(err));

            this.user = {
                name: '',
                login: '',
                password: ''
            }
        }
    }

}
</script>

<style scoped>
    
</style>