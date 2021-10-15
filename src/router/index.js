import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage';
import HomePage from '@/views/HomePage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    }
  ]
});
