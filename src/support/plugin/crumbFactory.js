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

    loader (status) {
      context.$store.dispatch('BREADCRUMB_LOADER', status)
    }
  }
}

export default crumbsFactory
