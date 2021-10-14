import { createApp } from 'vue';
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(CarbonComponentsVue)
  .use(router)
  .mount('#app');
