import Vue from 'vue'
import App from './App.vue'
import message from './lib/index.js'
Vue.use(message)

new Vue({
  el: '#app',
  created() {},
  render: h => h(App)
})
