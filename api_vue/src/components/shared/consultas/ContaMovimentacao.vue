<template>
    <div>
        
        <table>
            <tr>
                <th>Descriçao</th>
                <th>Tipo</th>
                <th>Valor</th>
            </tr>
            <tr v-for="mov in conta.moves">
                <td>{{ mov.description }}</td>
                <td>{{ mov.tipo }}</td>
                <td>{{ mov.value }}</td>
            </tr>
        </table>

        <total-conta :acount="conta" />

    </div>
</template>

<script>
import ContaSaldoTotal from './ContaSaldoTotal';
export default {

    components:{
        'total-conta': ContaSaldoTotal,
    },

    props:{
        conta:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
