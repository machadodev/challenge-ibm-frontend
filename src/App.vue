<template>
  <div class="app-container">
    <Header />
    <CvContent id="#main-content" class="app-content">
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
@import './styles/app';

.app-container {
  //height: 100%;
}

.bx--content {
  height: 100%;
  padding: 0;
}

.bx--header ~ .bx--content {
  margin: 0;
}
</style>
