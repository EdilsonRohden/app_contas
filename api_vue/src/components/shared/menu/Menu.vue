<template>
    <div>
        <nav>
            <ul>
                <li v-for="route of routes">
                    <router-link :to="route.path">{{ route.titulo }}</router-link>
                </li>
            </ul>
        </nav>
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
 
}
</script>

<style scoped>
    
</style>