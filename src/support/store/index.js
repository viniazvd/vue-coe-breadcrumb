export default {
  state: {
    crumbs: [],
    loaderMsg: '',
    separator: '',
    loading: false
  },

  getters: {
    __crumbs: ({ crumbs }) => crumbs,

    __loaderMsg: ({ loaderMsg }) => loaderMsg,

    __separator: ({ separator }) => separator,

    __loading: ({ loading }) => loading
  },

  mutations: {
    SYNC_STORE: (state, crumbs) => {
      state.crumbs = crumbs
    },

    SYNC_ROUTE: (state, crumbs) => {
      state.crumbs = crumbs
    },

    SET_SEPARATOR: (state, separator) => {
      state.separator = separator
    },

    SET_LOADER: (state, loaderMsg) => {
      state.loaderMsg = loaderMsg
    },

    HANDLE_LOADER: (state, status) => {
      state.loading = status
    }
  },

  actions: {
    BREADCRUMB_SYNC_STORE: ({ commit, getters }, { label, name }) => {
      const crumbs = getters['crumbs']
      if (!crumbs.length) return false

      const remaped = crumbs.map(crumb => (crumb.name === name && { ...crumb, label }) || crumb)

      commit('SYNC_STORE', remaped)
    },

    BREADCRUMB_SYNC_ROUTE: ({ commit, getters }, { matched, query = {}, params = {} }) => {
      const crumbs = getters['crumbs']
      if (!crumbs.length) return false

      const lastQuery = Object.values(query)[0]
      const lastParam = Object.values(params)[0]

      const added = matched.map((crumb, index) => ({
        ...crumb,
        label: (matched.length - 1 === index && (lastQuery || lastParam)) || (crumbs[index] && crumbs[index].label)
      }))

      commit('SYNC_ROUTE', added)
    },

    BREADCRUMB_SET_SEPARATOR: ({ commit }, separator) => commit('SET_SEPARATOR', separator),

    BREADCRUMB_SET_LOADER: ({ commit }, loaderMsg) => {
      commit('SET_LOADER', loaderMsg)
    },

    BREADCRUMB_LOADER: ({ commit }, status) => commit('HANDLE_LOADER', status)

  }
}
