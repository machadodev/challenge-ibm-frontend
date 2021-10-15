import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/Pages/Login.vue';
import Home from '@/Pages/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
});
