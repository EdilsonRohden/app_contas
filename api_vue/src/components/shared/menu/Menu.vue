<template>
    <div>
        <nav>
            <ul>
                <li v-for="route of routes" :key="route.titulo">
                    <router-link v-show="route.menu" :to="route.path">{{ route.titulo }}</router-link>
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
