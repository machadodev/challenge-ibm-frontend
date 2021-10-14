import { createApp } from 'vue';
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
import App from './App.vue';

createApp(App)
  .use(CarbonComponentsVue)
  .mount('#app');
