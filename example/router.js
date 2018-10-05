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
          children: [
            {
              path: ':campaignSlug',
              name: 'Detalhes da campanha',
              component: () => import('./views/Details.vue'),
              children: [
                {
                  path: ':id',
                  name: 'Editar campanha',
                  component: () => import('./views/Edit.vue')
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => console.log('1', to) || next())

export default router
