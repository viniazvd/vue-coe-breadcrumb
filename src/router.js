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
              path: '/',
              label: 'Início',
              name: 'Home'
            }

            store.dispatch('BREADCRUMB_ADD', route)
            store.dispatch('BREADCRUMB_STATUS', true)

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
              path: 'campanhas',
              label: category,
              name: 'Campanhas',
              query: { category }
            }

            console.log('categorias')
            store.dispatch('BREADCRUMB_ADD', route)

            next()
          },
          children: [
            {
              path: ':campaignSlug',
              name: 'Detalhes da campanha',
              component: () => import('./views/Details.vue'),
              beforeEnter: async (to, from, next) => {
                // console.log(to, 'details')
                const { campaignSlug } = to.params
                const route = {
                  path: ':campaignSlug',
                  label: campaignSlug,
                  name: 'Detalhes da campanha',
                  params: { campaignSlug }
                }

                console.log('detalhes')
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
                      path: ':id',
                      label: id,
                      name: 'Editar campanha',
                      params: { id }
                    }

                    console.log('tem?', store.getters.crumbs.length)
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
