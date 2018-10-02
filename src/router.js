import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',

  routes: [
    {
      path: '/',
      component: () => import('./App.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'campanhas',
          name: 'Campanhas',
          component: () => import('./views/Categories.vue'),
          // meta: {
          //   crumb: { label: 'query' }
          // },
          children: [
            // {
            //   path: '',
            //   name: 'Campanhas',
            //   component: () => import('./views/Search.vue')
            // },
            {
              path: ':campaignSlug',
              name: 'Detalhes da campanha',
              component: () => import('./views/Details.vue')
              // meta: {
              //   crumb: { label: 'params', property: 'campaignSlug' }
              // }
            }
          ]
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => console.log('1', to) || next())

export default router
