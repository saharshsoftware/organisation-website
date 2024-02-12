import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'
import router from './router'

import App from './App.vue'
// import CustomCursorVue from './components/atoms/CustomCursor.vue'

const app = createApp(App)

const vueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
}


// Register the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)
// app.component('CustomCursor', CustomCursorVue) // Global registration
app.use(VueQueryPlugin, vueQueryPluginOptions)
app.use(router)
app.mount('#app')
