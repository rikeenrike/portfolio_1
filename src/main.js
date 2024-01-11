import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { Iconoir } from '@iconoir/vue';
import { Icon } from '@iconify/vue';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import 'primevue/resources/themes/lara-light-green/theme.css'
import { ObserveVisibility } from "vue-observe-visibility";


createApp(App)
  .use(PrimeVue)
  .directive("observe-visibility", ObserveVisibility)
  .component('InputText', InputText)
  .component('Icon', Icon)
  .component('Iconoir', Iconoir)
  .component('Textarea', Textarea)
  .mount("#app");