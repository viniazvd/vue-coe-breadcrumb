import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        crumb: {
          nivel: 1,
          name: 'Início',
          path: '/'
        }
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue'),
      meta: {
        crumb: {
          nivel: 2,
          name: 'Categorias',
          path: '/category'
        }
      }
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./views/Details.vue'),
      meta: {
        crumb: {
          nivel: 3,
          name: 'Detalhes',
          path: '/details'
        }
      }
    }
  ]
})
