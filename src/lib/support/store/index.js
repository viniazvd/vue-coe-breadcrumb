export default {
  state: {
    crumbs: []
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs
  },

  mutations: {
    ADD_CRUMB: (state, crumbs) => {
      state.crumbs = [ ...state.crumbs, crumbs ]
    },

    REMOVE_CRUMB: (state, slice) => {
      state.crumbs = state.crumbs.slice(0, slice)
    },

    REPLACE_CRUMB: (state, crumb) => {
      // remove last position
      state.crumbs = state.crumbs.slice(0, -1)

      state.crumbs = [ ...state.crumbs, crumb ]
    }
  },

  actions: {
    BREADCRUMB_ADD: ({ commit }, name) => {
      commit('ADD_CRUMB', name)
    },

    BREADCRUMB_REMOVE: ({ commit }, slice) => commit('REMOVE_CRUMB', slice),

    BREADCRUMB_REPLACE: ({ commit }, crumb) => commit('REPLACE_CRUMB', crumb)
  }
}
