import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import EventBus from './utils/EventBus'
const app = createApp(App)
app.config.globalProperties.$bus = EventBus.instanced()
app.mount('#app')
