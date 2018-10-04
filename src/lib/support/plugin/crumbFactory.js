const crumbsFactory = context => {
  return {
    // getters
    crumbs: context.$store.getters.crumbs,

    msg: context.$store.getters.msg,

    loading: context.$store.getters.loading,

    // actions
    update (label, name) {
      context.$store.dispatch('BREADCRUMB_UPDATE', { label, name })
    },

    add (name) {
      context.$store.dispatch('BREADCRUMB_ADD', name)
    },

    setLoader (msg) {
      context.$store.dispatch('BREADCRUMB_SET_LOADER', msg)
    },

    loader (status) {
      context.$store.dispatch('BREADCRUMB_LOADER', status)
    }
  }
}

export default crumbsFactory
