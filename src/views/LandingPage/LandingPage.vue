<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <div class="bx--grid--full-width">
          <div class="bx--row">
            <div class="bx--col-lg-12">
              <CvTile class="center">
                <h1 class="title">IBM Challenge</h1>
                <h6 class="subtitle">Leonardo Machado</h6>
                <CvButton
                  :icon="ArrowRight16"
                  class="login-btn"
                  @click="actionClick"
                  >Entrar</CvButton
                >
              </CvTile>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CvTile, CvButton } from '@carbon/vue';
import { ArrowRight16 } from '@carbon/icons-vue';

export default {
  name: 'LandingPage',
  components: {
    CvTile,
    CvButton
  },
  methods: {
    actionClick() {
      this.$router.push('/home');
    }
  },
  computed: {
    ArrowRight16() {
      return ArrowRight16;
    }
  }
};
</script>

<style scoped>
.bx--tile {
  background-color: transparent;
}

.outer {
  display: table;
  position: absolute;
  height: 100%;
  width: 100%;
}

.middle {
  vertical-align: middle;
  display: table-cell;
}

.inner {
  margin-left: auto;
  margin-right: auto;
  max-width: 305px;
  background-color: transparent;
  position: relative;
  margin-bottom: 10rem;
  overflow: hidden;
}

.center {
  text-align: center;
}

.title {
  color: white;
}

.subtitle {
  color: white;
  margin-bottom: 1rem;
}

.login-btn {
  width: 100%;
  max-width: 100%;
}
</style>
