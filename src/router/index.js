import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage';
import HomePage from '@/views/HomePage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    }
  ]
});
