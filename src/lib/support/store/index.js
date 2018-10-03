import { hasDuplicates } from '../services'

export default {
  state: {
    crumbs: [],
    status: false
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs
  },

  mutations: {
    ADD_CRUMB: (state, crumbs) => {
      state.crumbs = crumbs
    },

    REMOVE_CRUMB: (state, sliced) => {
      // ex:
      // if slice === 1: remove last position
      // if slice === 2: remove the last 2 positions
      state.crumbs = sliced
    },

    REPLACE_CRUMB: (state, replaced) => {
      state.crumbs = replaced
    },

    REMAP_CRUMBS: (state, crumbs) => {
      state.crumbs = crumbs
    },

    STATUS_CRUMBS: (state, status) => {
      state.status = status
    }
  },

  actions: {
    BREADCRUMB_ADD: ({ commit, getters }, crumb) => {
      // issue: does not detect the first crumb(home) at click
      // so if the last crumb is the initial one, the store is updated
      const crumbs = getters['crumbs']
      console.log('crumbs', crumbs.length)

      if (crumbs && crumbs.length > 1 && hasDuplicates([ ...crumbs, crumb ], 'name')) {
        commit('ADD_CRUMB', [ crumb ])
      } else {
        commit('ADD_CRUMB', [ ...crumbs, crumb ])
      }
    },

    BREADCRUMB_REMOVE: ({ commit, getters }, slice) => {
      const crumbs = getters['crumbs']

      const sliced = crumbs.slice(0, crumbs.length - slice)

      commit('REMOVE_CRUMB', sliced)
    },

    BREADCRUMB_REPLACE: ({ commit, getters }, crumb) => {
      const crumbs = getters['crumbs']

      // remove last position
      const sliced = crumbs.slice(0, -1)

      const replaced = [ ...sliced, crumb ]

      commit('REPLACE_CRUMB', replaced)
    },

    BREADCRUMB_REMAP: ({ commit }, routes) => {
      const storage = JSON.parse(localStorage.getItem('crumbs'))

      commit('REMAP_CRUMBS', storage)
    },

    BREADCRUMB_STATUS: ({ commit }, status) => {
      commit('STATUS_CRUMBS', status)
    }
  }
}
