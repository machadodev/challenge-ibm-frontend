<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <div class="bx--grid--full-width">
          <div class="bx--row">
            <div class="bx--col-lg-12">
              <CvForm @submit.prevent="actionSubmit">
                <CvTextArea
                  label="Pesquisar soluções para erros"
                  helper-text="Campo de busca para encontrar possíveis soluções para erros no Stackoverflow"
                  placeholder="Escreva aqui..."
                  v-model="textValue"
                >
                </CvTextArea>
                <CvSelect
                  v-model="pagesizeValue"
                  @change="onSelectOption"
                  class="select-count-results"
                  label="Selecione quantas possíveis respostas deseja ver"
                >
                  <CvSelectOption
                    v-for="option in generateOptions"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.label }}</CvSelectOption
                  >
                </CvSelect>
                <CvButton :icon="Search16">Buscar</CvButton>
              </CvForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CvForm,
  CvSelect,
  CvSelectOption,
  CvTextArea,
  CvButton
} from '@carbon/vue';
import { Search16 } from '@carbon/icons-vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  components: {
    CvForm,
    CvSelect,
    CvSelectOption,
    CvTextArea,
    CvButton
  },
  data() {
    return {
      textValue: '',
      pagesizeValue: '1'
    };
  },
  methods: {
    actionSubmit() {
      axios
        .post('http://localhost:3000/search', {
          text: this.textValue,
          pagesize: this.pagesizeValue
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    onSelectOption(value) {
      this.pagesizeValue = value;
    }
  },
  computed: {
    Search16() {
      return Search16;
    },
    generateOptions() {
      const options = [];
      for (let i = 1; i <= 5; i++) {
        options.push({
          label: i,
          value: i
        });
      }
      return options;
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
  border-radius: 3px;
  background-color: rgb(255, 255, 255) !important;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  padding: 2rem;
  max-width: 810px;
  background-color: transparent;
  position: relative;
  margin-bottom: 20rem;
  overflow: hidden;
}

.select-count-results {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
