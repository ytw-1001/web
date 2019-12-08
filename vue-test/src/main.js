import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementui from 'element-ui'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'

Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:4001/api'
})


Vue.use(elementui)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
