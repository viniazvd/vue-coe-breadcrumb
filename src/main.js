import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCoeBreadcrumb from './lib/support/plugin'

const config = {
  level0: '',
  level1: 'query',
  level2: 'params'
}

Vue.use(VueCoeBreadcrumb, config)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
