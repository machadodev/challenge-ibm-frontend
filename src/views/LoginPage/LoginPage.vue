<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <div class="bx--grid--full-width">
          <div class="bx--row">
            <div class="bx--col-lg-12 test">
              <CvTile class="center">
                <h1>Entrar</h1>
                <CvButton @click="actionClick">ENTRAR</CvButton>
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

export default {
  name: 'LoginPage',
  components: {
    CvTile,
    CvButton
  },
  methods: {
    actionClick() {
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
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
  position: relative;
  max-width: 530px;
  width: calc(100% - 40px);
  margin-bottom: 28px;
  min-width: 320px;
  min-height: 338px;
  overflow: hidden;
}
</style>
