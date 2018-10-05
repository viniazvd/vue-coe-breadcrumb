export default {
  state: {
    crumbs: [],
    loaderMsg: '',
    separator: '',
    loading: false
  },

  getters: {
    crumbs: ({ crumbs }) => crumbs,

    loaderMsg: ({ loaderMsg }) => loaderMsg,

    separator: ({ separator }) => separator,

    loading: ({ loading }) => loading
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
      // console.log('crumbs', crumbs)
      const remaped = crumbs.map(crumb => (crumb.name === name && { ...crumb, label }) || crumb)

      // const remaped = crumbs.map(crumb => {
      //   return {
      //     ...(crumb.name === name && { ...crumb, label }) || crumb,
      //     name: crumb.name || 'Início'
      //   }
      // })

      commit('SYNC_STORE', remaped)
    },

    BREADCRUMB_SYNC_ROUTE: ({ commit, getters }, { matched, query = {}, params = {} }) => {
      const getter = getters['crumbs']

      const lastQuery = Object.values(query)[0]
      const lastParam = Object.values(params)[0]

      const added = matched.map((crumb, index) => ({
        ...crumb,
        label: (matched.length - 1 === index && (lastQuery || lastParam)) || (getter[index] && getter[index].label)
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
