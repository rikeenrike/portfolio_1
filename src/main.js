import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { Iconoir } from '@iconoir/vue';
import { Icon } from '@iconify/vue';
import lenis from "vue-lenis";


createApp(App)
  .component('Icon', Icon)
  .component('Iconoir', Iconoir)
  .use(lenis)
  .mount("#app");