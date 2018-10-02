export default {
  state: {
    crumbs: [],
    currentNivel: null
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs,

    lastNivel: ({ crumbs }) => {
      const length = crumbs.length

      return length && crumbs[length - 1].nivel
    },

    currentNivel: ({ currentNivel }) => currentNivel
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
      state.currentNivel = nivel
    }
  },

  actions: {
    BREADCRUMB_ADD: ({ commit }, crumb) => {
      commit('ADD_CRUMB', crumb)
    },

    BREADCRUMB_REMOVE: ({ commit }, currentNivel) => {
      commit('REMOVE_CRUMB', currentNivel)
    },

    BREADCRUMB_SET_NIVEL: ({ commit }, nivel) => {
      commit('SET_NIVEL', nivel)
    }
  }
}
