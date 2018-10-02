const crumbsFactory = context => {
  return {
    // getters
    crumbs () {
      return context.$store.getters.crumbs
    },

    lastNivel () {
      return context.$store.getters.lastNivel
    },

    currentNivel () {
      return context.$store.getters.currentNivel
    },

    // actions
    add (crumb) {
      context.$store.dispatch('BREADCRUMB_ADD', crumb)
    },

    remove (currentNivel) {
      context.$store.dispatch('BREADCRUMB_REMOVE', currentNivel)
    },

    syncNivel (nivel) {
      context.$store.dispatch('BREADCRUMB_SET_NIVEL', nivel)
    }
  }
}

export default crumbsFactory
