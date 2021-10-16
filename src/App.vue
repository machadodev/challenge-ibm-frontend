<template>
  <div class="app-container">
    <Header />
    <CvContent id="#main-content" class="app-content">
      <router-view />
    </CvContent>

    <!-- Adiciona o componente vlibras ao projeto -->
    <VLibras></VLibras>

    <!-- Adiciona botão na parte inferior direita de
         acessibilidade com opções de contraste, tamanho de fonte, etc.
    -->
    <AccessibilityToolbar
      invertColorsText="Inverter cores"
      highlightLinksText="Focar Links"
      accessibileFontSizeText="Mudar tamanho da fonte"
    ></AccessibilityToolbar>
  </div>
</template>

<script>
import { CvContent } from '@carbon/vue';
import Header from './components/Header';
import VLibras from './components/vlibras';

export default {
  name: 'App',
  components: {
    Header,
    CvContent,
    VLibras
  }
};
</script>

<style lang="scss">
@import './styles/app';

.bx--content {
  height: 100%;
  padding: 0;
}

.bx--header ~ .bx--content {
  margin: 0;
}
</style>
