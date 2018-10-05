import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCoeBreadcrumb from './lib/support/plugin'

Vue.use(VueCoeBreadcrumb, store, {
  delay: 250,
  separatorText: '>',
  loaderMsg: 'loading...'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
