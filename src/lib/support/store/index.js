export default {
  state: {
    crumbs: []
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs,

    lastNivel: ({ crumbs }) => {
      const length = crumbs.length

      return length && crumbs[length - 1].nivel
    }

    // currentNivel: (state, getters) => state.crumbs[getters.lastNivel - 1].nivel
  },

  mutations: {
    ADD_CRUMB: (state, crumbs) => {
      if (Array.isArray(crumbs)) {
        state.crumbs = [ ...state.crumbs, ...crumbs ]
      } else {
        state.crumbs = [ ...state.crumbs, crumbs ]
      }
    },

    REMOVE_CRUMB: (state, currentNivel) => {
      state.crumbs = state.crumbs.filter(crumb => crumb.nivel <= currentNivel)
    },

    SET_NIVEL: (state, nivel) => {
      state.nivel = nivel
    }
  },

  actions: {
    BREADCRUMB_ADD: ({ commit }, crumb) => {
      commit('ADD_CRUMB', crumb)
    },

    BREADCRUMB_REMOVE: ({ commit }, currentNivel) => {
      commit('REMOVE_CRUMB', currentNivel)
    },

    BREADCRUMB_NIVEL: ({ commit }, nivel) => {
      commit('SET_NIVEL', nivel)
    }
  }
}
