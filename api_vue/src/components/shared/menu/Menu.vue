<template>
    <div class="lista">
        <ul class="nav nav-tabs">
          <li><button class="btn btn-success" v-show="home_data" @click="home">Home</button></li>
          <li><button class="btn btn-danger" v-show="logoff_data" @click="logoff" >logoff</button></li>
        </ul>
    </div>
</template>

<script>
export default {

    data(){
        return{
            token: '',
            home_data: false,
            logoff_data: false
        }
    },

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
            this.token = null;
            this.$router.push('/');
        },
        home(){
            this.token = localStorage.getItem('token');
            if(this.token != null){
                    this.$router.push('/home');
            }else{
                    this.$router.push('/');
            }
        }
    }

}
</script>

<style scoped>
    .lista{
        background-color: #24292e;
        top: 0;
        height: 40px;
    }
    .logoff{
        margin: 10px;
    }
</style>
