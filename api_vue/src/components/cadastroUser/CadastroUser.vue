<template>
    <div>
        <form @submit.prevent="cadastrar()">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" v-model="user.nome"/>
            </div>
            <div>
                <label for="login">Login:</label>
                <input type="text" name="login" id="login" v-model="user.login"/>
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" name="password" id="password" v-model="user.password"/>
            </div>

            <button>Salvar</button>
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
                .then(res => {
                  res.json().then(data => {
                    data.token = "Bearer ".concat(data.token);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user_data', JSON.stringify(data.user));
                  });
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

</style>
