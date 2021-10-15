<template>
  <div>
    <Header />
    <CvContent id="#main-content">
      <router-view />
    </CvContent>
  </div>
</template>

<script>
import { CvContent } from '@carbon/vue';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    CvContent,
    Header
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
