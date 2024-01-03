import { createApp } from 'vue'
import './assets/main.css'
import lenis from "vue-lenis";
import App from './App.vue'

createApp(App)
  .use(lenis)
  .mount("#app");