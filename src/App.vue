<template>
  <div>
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
