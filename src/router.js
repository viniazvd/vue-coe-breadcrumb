import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

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
          path: '/',
          name: 'Home',
          component: () => import('./views/Home.vue'),
          beforeEnter: async (to, from, next) => {
            const route = {
              label: 'Início',
              name: 'Home',
              path: '/'
            }

            store.dispatch('BREADCRUMB_ADD', route)

            next()
          }
        },
        {
          path: 'campanhas',
          name: 'Campanhas',
          component: () => import('./views/Categories.vue'),
          beforeEnter: async (to, from, next) => {
            const { category } = to.query
            const route = {
              label: category,
              name: 'Campanhas',
              query: { category }
            }

            store.dispatch('BREADCRUMB_ADD', route)

            next()
          },
          children: [
            // {
            //   path: '',
            //   name: 'Campanhas',
            //   component: () => import('./views/Search.vue')
            // },
            {
              path: ':campaignSlug',
              name: 'Detalhes da campanha',
              component: () => import('./views/Details.vue'),
              beforeEnter: async (to, from, next) => {
                const { campaignSlug } = to.params
                const route = {
                  label: campaignSlug,
                  name: 'Detalhes da campanha',
                  params: { campaignSlug }
                }

                store.dispatch('BREADCRUMB_ADD', route)

                next()
              },
              children: [
                {
                  path: ':id',
                  name: 'Editar campanha',
                  component: () => import('./views/Edit.vue'),
                  beforeEnter: async (to, from, next) => {
                    const { id } = to.params
                    const route = {
                      label: id,
                      name: 'Editar campanha',
                      params: { id }
                    }

                    store.dispatch('BREADCRUMB_ADD', route)

                    next()
                  }
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
