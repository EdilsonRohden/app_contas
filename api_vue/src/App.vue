<template>
  <div id="app">
    
    <meu-menu :routes="routes" />

    <router-view></router-view>    

    <meu-footer />

  </div>
</template>

<script>

import Menu from './components/shared/Menu';
import Footer from './components/shared/Footer'

import { routes } from "./routes";

export default {

  data(){
    return{
      routes 
    }
  },

  components: {
    'meu-menu': Menu,
    'meu-footer': Footer
  }

}
</script>

<style scoped>

</style>
