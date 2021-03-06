import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import VouResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(Vuex);
Vue.use(VouResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
