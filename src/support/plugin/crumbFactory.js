const crumbsFactory = context => {
  return {
    // getters
    crumbs: context.$store.getters.__crumbs,

    loaderMsg: context.$store.getters.__loaderMsg,

    separator: context.$store.getters.__separator,

    loading: context.$store.getters.__loading,

    hidden: context.$store.getters.__hidden,

    // actions
    syncStore (label, name, hidden) {
      context.$store.dispatch('BREADCRUMB_SYNC_STORE', { label, name, hidden })
    },

    syncRoute (name) {
      context.$store.dispatch('BREADCRUMB_SYNC_ROUTE', name)
    },

    setSeparator (separator) {
      context.$store.dispatch('BREADCRUMB_SET_SEPARATOR', separator)
    },

    setLoader (loaderMsg) {
      context.$store.dispatch('BREADCRUMB_SET_LOADER', loaderMsg)
    },

    setHidden (hidden) {
      context.$store.dispatch('BREADCRUMB_SET_HIDDEN', hidden)
    },

    loader (status) {
      context.$store.dispatch('BREADCRUMB_LOADER', status)
    }
  }
}

export default crumbsFactory
