const crumbSetup = {
  mounted () {
    const { breadcrumb } = this.$options

    if (breadcrumb) {
      console.log('breadcrumb', breadcrumb)
    }
  }
}

export default crumbSetup
