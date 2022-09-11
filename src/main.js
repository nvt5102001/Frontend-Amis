import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MsCombobox from 'ms-combobox'

import storeConfigs from './store'
const store = new Vuex.Store(storeConfigs) 

const app = createApp(App)
app.mount('#app')
app.use(store)
app.component("MsCombobox",MsCombobox)


