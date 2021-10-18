<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <div class="bx--grid--full-width">
          <div class="bx--row">
            <div class="bx--col-lg-12">
              <CvForm @submit.prevent="onSubmit">
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
                <CvButton :icon="Search16" :disabled="!canSearch"
                  >Buscar</CvButton
                >
              </CvForm>
            </div>
          </div>
          <div class="bx--row">
            <div class="bx--col-lg-12 divider"></div>
          </div>
          <h4 class="notfound-answer" v-if="notFoundAnswer.flag">
            {{ notFoundAnswer.message }}
          </h4>
          <div class="bx--row" v-if="answers.length > 0">
            <div class="bx--col-lg-12">
              <CvTabs
                :container="container"
                @tab-selected="actionSelected"
                aria-label="navigation tab label"
              >
                <CvTab
                  v-for="(answer, id) in answers"
                  :key="id"
                  :id="`tab-${id}`"
                  :label="`Resposta ${id + 1}`"
                >
                  <div class="answer" v-html="answer"></div>
                </CvTab>
              </CvTabs>
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
  CvTabs,
  CvTab,
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
    CvTabs,
    CvTab,
    CvButton
  },
  data() {
    return {
      answers: [],
      textValue: '',
      pagesizeValue: '1',
      container: false,
      selected: false,
      disabled: false,
      notFoundAnswer: {
        message: 'Nenhuma resposta encontrada',
        flag: false
      },
      submitting: false
    };
  },
  methods: {
    onSubmit() {
      if (!this.submitting) {
        this.submitting = !this.submitting;

        axios(`${process.env.VUE_APP_API_URL}/api/search`, {
          method: 'POST',
          data: { text: this.textValue, pagesize: this.pagesizeValue },
          withCredentials: true
        })
          .then(response => {
            this.answers = response.data;
            this.notFoundAnswer.flag = this.answers.length === 0;
            this.submitting = false;
          })
          .catch(error => {
            console.error(error);
            window.alert('Something went wrong');
            this.submitting = false;
          });
      }
    },
    onSelectOption(value) {
      this.pagesizeValue = value;
    },
    actionSelected() {}
  },
  computed: {
    Search16() {
      return Search16;
    },
    canSearch() {
      return this.textValue.length > 0 && this.submitting === false;
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
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 2rem;
  max-width: 80vw;
  background-color: transparent;
  position: relative;

  overflow: hidden;
}

@media (max-width: 600px) {
  .inner {
    border-radius: 0;
    margin-top: 3rem;
    margin-bottom: 0;
    padding: 1rem;
    max-width: 100vw;
  }
}

.select-count-results {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.divider {
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1px;
  overflow: hidden;
  background-color: #e0e0e0;
}

.answer {
  margin-top: 1rem;
}

.notfound-answer {
  color: rgb(121, 6, 6);
}
</style>
