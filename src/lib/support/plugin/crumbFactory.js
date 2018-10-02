const crumbsFactory = context => {
  return {
    show () {
      context.$store.dispatch('BREADCRUMB')
    }
  }
}

export default crumbsFactory
