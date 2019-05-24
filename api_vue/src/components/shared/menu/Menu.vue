<template>
    <div class="lista">

    </div>
</template>

<script>
export default {
    data(){
        return{
            token: ''
        }
    },
    updated() {
        this.token = localStorage.getItem('token');
    },
    props: {

        routes:{

            type: Array,
            required: true

        }

    },

}
</script>

<style scoped>
    .lista{
        list-style: none;
        background-color: #24292e;
        width: 100%;
        height: 40px;
        margin-right: 20px;
    }
    .lista-item{
        display: inline-block;
        margin: 10px;
        
    }
</style>
