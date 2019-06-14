<template>
    <div class="lista">
        <ul class="nav nav-tabs">
          <li role="presentation"><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><button class="btn btn-danger" @click="logoff" >logoff</button></li>
        </ul>
    </div>
</template>

<script>
export default {

    props: {

        routes:{

            type: Array,
            required: true

        }

    },
    methods:{
        logoff(){
            localStorage.removeItem('token');
            localStorage.removeItem('user_data');
            this.$router.push('/');
        }
    }

}
</script>

<style scoped>
    .lista{
        background-color: #24292e;
    }
    .logoff{
        margin: 10px;
    }
</style>
