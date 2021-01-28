import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { VuelidatePlugin } from '@vuelidate/core'

createApp(App)
  .use(store)
  .use(VuelidatePlugin)
  .mount('#app')
