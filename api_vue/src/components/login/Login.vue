<template>
    <div>
        <div>
            <label for="login">Login:</label>
            <input name="login"></input>
        </div>
        <div>
            <label for="password">Senha:</label>
            <input name="password"></input>
        </div>
        <button>Login</button>
        
        <div>
            <router-link to='/CadastroUser'>Criar conta</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>