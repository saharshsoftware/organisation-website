import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'
import router from './router'

import App from './App.vue'

const app = createApp(App)

// Register the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
