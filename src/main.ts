import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
import {createPinia} from "pinia"

const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
