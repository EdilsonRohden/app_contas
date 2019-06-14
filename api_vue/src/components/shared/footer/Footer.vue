<template>
    <footer class="footer">
        
        <h1>Carteiras Compasso/UNOESC®</h1>
        <h2 class="nome">Edilson Rohden</h2>
        <h2 class="fac">
            Dúvidas ou bugs clique
            <a class="suporte" href="https://github.com/EdilsonRohden/app_contas/issues">aqui</a>
            .
        </h2>
        
    </footer>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
    h1{
        margin-top: 20px;
        font-size: 20px;
    }
    .footer{
        margin: auto;
        display: block;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        background-color: #24292e;
        font-family: Arial, Helvetica, sans-serif;
        color: aliceblue
    }
    .nome{
        text-align: right;
        margin: 10px;
        font-size: 15px;
    }
    .suporte{
        color: aqua;
    }
    .fac{
        text-align: right;
        margin: 10px;
        font-size: 15px;
    }
</style>