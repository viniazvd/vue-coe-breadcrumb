const crumbsFactory = context => {
  return {
    // getters
    crumbs: context.$store.getters.__crumbs,

    separator: context.$store.getters.__separator,

    hidden: context.$store.getters.__hidden,

    // actions
    syncStore (label) {
      context.$store.dispatch('BREADCRUMB_SYNC_STORE', { label })
    },

    syncRoute (routes) {
      context.$store.dispatch('BREADCRUMB_SYNC_ROUTE', routes)
    }
  }
}

export default crumbsFactory
