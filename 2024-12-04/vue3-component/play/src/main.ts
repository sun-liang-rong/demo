import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { SIcon } from '@sun-sun/components/icon'
const plugins = [SIcon]
const app = createApp(App)
plugins.forEach((plugin) => app.use(plugin))
app.mount('#app')
