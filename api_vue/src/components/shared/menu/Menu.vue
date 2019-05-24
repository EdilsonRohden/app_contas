<template>
    <div class="lista">
        <button class="btn btn-danger" style="margin: 8px;" @click="logoff" >logoff</button>
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
            this.$router.push('/');
        }
    }

}
</script>

<style scoped>
    .lista{
        list-style: none;
        background-color: #24292e;
        width: 100%;
        height: 50px;
        text-align: right;
    }
    .logoff{
        margin: 10px;
    }
</style>
