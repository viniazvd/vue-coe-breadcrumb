export default {
  state: {
    crumbs: [],
    separator: '',
    hidden: [],
    loading: false
  },

  getters: {
    __crumbs: ({ crumbs }) => crumbs,

    __separator: ({ separator }) => separator,

    __loading: ({ loading }) => loading,

    __hidden: ({ hidden }) => hidden
  },

  mutations: {
    SYNC_STORE: (state, crumbs) => (state.crumbs = crumbs),

    SYNC_ROUTE: (state, crumbs) => (state.crumbs = crumbs),

    SET_SEPARATOR: (state, separator) => (state.separator = separator),

    SET_HIDDEN: (state, hidden) => (state.hidden = hidden)
  },

  actions: {
    BREADCRUMB_SYNC_STORE: ({ commit, getters }, { label, name }) => {
      const crumbs = getters['__crumbs']
      const hidden = getters['__hidden']

      const remaped = crumbs
        .map(crumb => {
          return (crumb.name === name && {
            name: crumb.name,
            path: crumb.path,
            meta: crumb.meta,
            params: crumb.params,
            redirect: crumb.redirect,
            label
          }) || crumb
        })
        .filter(crumb => !hidden.includes(crumb.name))

      commit('SYNC_STORE', remaped)
    },

    BREADCRUMB_SYNC_ROUTE: ({ commit, getters }, { fullPath, name, matched, query = {}, params = {} }) => {
      const crumbs = getters['__crumbs']
      const hidden = getters['__hidden']

      function getParam (route, crumb, index) {
        const _query = Object.values(query)[Object.keys(query).length - 1]
        const _params = Object.keys(params).length > 1 ? fullPath.split('/')[index] : Object.values(params)[Object.keys(params).length - 1]

        if (!crumb.name) return undefined

        return (crumb.name && ((route === crumb.name && (_params || _query)) || _query)) || (crumbs.find(_crumb => _crumb.name === crumb.name) || {}).label
      }

      const added = matched
        .map((crumb, index) => {
          return {
            name: crumb.name,
            path: crumb.path,
            meta: crumb.meta,
            params: crumb.params,
            redirect: crumb.redirect,
            label: getParam(name, crumb, index)
          }
        })
        .filter(route => !hidden.includes(route.name))

      commit('SYNC_ROUTE', added)
    },

    BREADCRUMB_SET_SEPARATOR: ({ commit }, separator) => commit('SET_SEPARATOR', separator),

    BREADCRUMB_SET_HIDDEN: ({ commit }, hidden) => commit('SET_HIDDEN', hidden)
  }
}
