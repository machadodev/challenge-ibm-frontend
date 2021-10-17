import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage';
import HomePage from '@/views/HomePage';
import store from '../store';
import axios from 'axios';

Vue.use(VueRouter);

// https://router.vuejs.org/guide/advanced/navigation-guards.html
function requireAuth(to, from, next) {
  // Testing authentication state of the user
  if (!store.state.user.logged) {
    // Not sure if user is logged in yet, testing their login
    const isLoggedUrl = `${process.env.VUE_APP_API_URL}/auth/logged`;
    axios
      .get(isLoggedUrl, { withCredentials: true })
      .then(response => {
        const user = response.data;
        if (user.logged) {
          // User is already logged in, storing
          store.commit('setUser', user);
          next();
        } else {
          // User is not logged in, redirecting to App ID
          window.location.href = `${process.env.VUE_APP_API_URL}/auth/login?redirect=${to.fullPath}`;
        }
      })
      .catch(e => {
        // TODO: do something sensible here so the user sees their login has failed
        console.error("Testing user login failed - D'oh!", e);
      });
  } else {
    // User already logged in
    next();
  }
}

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'home-page',
      beforeEnter: requireAuth,
      component: HomePage
    }
  ]
});
