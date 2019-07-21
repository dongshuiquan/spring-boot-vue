import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL="http://localhost:8880/"


new Vue({
  el: '#app',
  render: h => h(App)
})
