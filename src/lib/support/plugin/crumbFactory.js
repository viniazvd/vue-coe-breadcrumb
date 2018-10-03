const crumbsFactory = context => {
  return {
    // getters
    crumbs: context.$store.getters.crumbs,

    // actions
    add (name) {
      context.$store.dispatch('BREADCRUMB_ADD', name)
    },

    remove (currentNivel) {
      context.$store.dispatch('BREADCRUMB_REMOVE', currentNivel)
    },

    replace (crumb) {
      context.$store.dispatch('BREADCRUMB_REPLACE', crumb)
    }
  }
}

export default crumbsFactory
