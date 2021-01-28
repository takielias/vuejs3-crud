import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

import Loading from './components/Loading.vue'

import './style/index.css'

import Toast, { PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
   timeout: 1500 
};

createApp(App)
.use(router)
.use(Toast, options)
.component('loading', Loading)
.mount('#app')

