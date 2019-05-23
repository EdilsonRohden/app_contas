<template>
    <div>
        <form @submit.prevent="">
            <div>
                <label for="description">Descrição</label>
                <input type="text" name="description" id="description" @input=" mov.description = $event.target.value" />
            </div>
            <div>
                <select name="tipo" id="tipo">
                    <option value="D">Débito</option>
                    <option value="C">Crédito</option>
                </select>
            </div>
            <div>
                <label for="value">Valor</label>
                <input type="number" name="value" id="value"/>
            </div>
            <div>
                <button>Salvar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

    data(){
        return{
            mov:{
                description: '',
                tipo: '',
                value: 0,
            }
        }
    },

    methods: {
        salavar(){

        }
    },
    
}
</script>

<style scoped>
    
</style>