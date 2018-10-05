export default {
  state: {
    crumbs: [],
    msg: '',
    loading: false
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs,

    loading: ({ loading }) => loading,

    msg: ({ msg }) => msg
  },

  mutations: {
    UPDATE_CRUMB: (state, crumbs) => {
      state.crumbs = crumbs
    },

    ADD_CRUMB: (state, crumbs) => {
      state.crumbs = crumbs
    },

    SET_LOADER: (state, msg) => {
      state.msg = msg
    },

    HANDLE_LOADER: (state, status) => {
      state.loading = status
    }
  },

  actions: {
    BREADCRUMB_UPDATE: ({ commit, getters }, { label, name }) => {
      const crumbs = getters['crumbs']
      const remaped = crumbs.map(crumb => (crumb.name === name && { ...crumb, label }) || crumb)

      commit('UPDATE_CRUMB', remaped)
    },

    BREADCRUMB_ADD: ({ commit, getters }, crumbs) => {
      const getter = getters['crumbs']

      if (!getter.length) {
        commit('ADD_CRUMB', crumbs); return true
      }

      const added = crumbs.map((crumb, index) => ({ ...crumb, label: getter[index] && getter[index].label }))

      commit('ADD_CRUMB', added)
    },

    BREADCRUMB_SET_LOADER: ({ commit }, msg) => {
      commit('SET_LOADER', msg)
    },

    BREADCRUMB_LOADER: ({ commit }, status) => commit('HANDLE_LOADER', status)
  }
}
