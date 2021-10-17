import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage';
import HomePage from '@/views/HomePage';
import store from '../store';

Vue.use(VueRouter);

// https://router.vuejs.org/guide/advanced/navigation-guards.html
function requireAuth(to, from, next) {
  // Testing authentication state of the user
  if (!store.state.user.logged) {
    // Not sure if user is logged in yet, testing their login
    const isLoggedUrl = 'http://localhost:3000/auth/logged';
    fetch(isLoggedUrl, { credentials: 'include' })
      .then(res => res.json())
      .then(isLogged => {
        if (isLogged.logged) {
          // User is already logged in, storing
          store.commit('setUser', isLogged);
          next();
        } else {
          // User is not logged in, redirecting to App ID
          window.location.href = `http://localhost:3000/auth/login?redirect=${to.fullPath}`;
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
  mode: 'history',
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
