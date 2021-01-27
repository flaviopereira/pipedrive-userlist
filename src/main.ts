import { createApp } from 'vue'
import App from './App.vue'
import { VuelidatePlugin } from '@vuelidate/core'

createApp(App).use(VuelidatePlugin).mount('#app')
