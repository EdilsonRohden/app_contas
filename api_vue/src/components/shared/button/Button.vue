<template>
    <div>
        <button class="button" :class="this.stile" :type="this.type" >{{ this.title }}</button>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: string,
            required: true
        },
        stile: {
            type: String
        },
        title: {
            type: String,
            required: true
        }
    },
    created() {
        this.stile ? this.stile : this.stile = 'padrao';
    },
}
</script>

<style scoped>

    .button{
        
    }

    .padrao{
        color: aqua;
    }

</style>