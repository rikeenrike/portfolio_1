import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { Iconoir } from '@iconoir/vue';
import { Icon } from '@iconify/vue';
import lenis from "vue-lenis";
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

import 'primevue/resources/themes/lara-light-green/theme.css'


createApp(App)
  .use(PrimeVue)
  .component('InputText', InputText)
  .component('Icon', Icon)
  .component('Iconoir', Iconoir)
  .component('Textarea', Textarea)
  .use(lenis)
  .mount("#app");