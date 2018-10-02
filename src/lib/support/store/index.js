export default {
  state: {
    crumbs: []
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs
  },

  mutations: {
    ADD_CRUMB: (state, crumbs) => {
      if (Array.isArray(crumbs)) {
        state.crumbs = [ ...state.crumbs, ...crumbs ]
      } else {
        state.crumbs = [ ...state.crumbs, crumbs ]
      }
    },

    REMOVE_CRUMB: (state, slice) => (state.crumbs = state.crumbs.slice(0, slice))
  },

  actions: {
    BREADCRUMB_ADD: ({ commit }, name) => commit('ADD_CRUMB', name),

    BREADCRUMB_REMOVE: ({ commit }, slice) => commit('REMOVE_CRUMB', slice)
  }
}
