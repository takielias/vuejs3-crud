import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

import store from './store'

import Loading from '@/components/Loading.vue'

import './style/index.css'

import miniToastr from 'mini-toastr'

miniToastr.init()

createApp(App)
.use(router)
.mount('#app')


