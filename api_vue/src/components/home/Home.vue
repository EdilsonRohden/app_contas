<template>
    <div>
      <ul>
        <div v-for='acount in acounts' :key="acount._id" >
          <router-link :to="{ name: 'cadastroMovimento', params : { id: acount._id } }">
            <div class="container">
              <p>{{ acount.description }}</p>
              <p>{{ acounts.moves }}</p>
              <p>{{ acount.createdAt }}</p>
            </div>
          </router-link>
        </div>
      </ul>
    </div>
</template>
<script>
export default {
    data(){
      return{
        token: '',
        acounts: {}
      }
    },

    methods:{

    },

    created(){
      this.token = localStorage.getItem('token');
      this.$http.get('acounts/', { headers: { 'Authorization': this.token } })
        .then(
          function(res){ this.acounts = res.body.acounts; console.log(this.acounts) },
          function(err){ console.log(err) }
        );
    }

}
</script>

<style scoped>
  .container{
    margin: 10px;
    border: 5px;
  }
</style>
