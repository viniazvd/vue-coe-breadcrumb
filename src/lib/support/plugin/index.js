import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store) {
    if (!store) {
      console.error('stack need store')
      return false
    }

    registerStore(store)

    Object.defineProperty(Vue.prototype, '$breadcrumb', {
      get () {
        return crumbFactory(this)
      }
    })

    Vue.mixin({
      created () {
        if (this.$options.hasCrumb) {
          if (localStorage.getItem('token')) {
            console.log('seta item')
            this.$breadcrumb.add(localStorage.getItem('crumbs'))
            // localStorage.setItem('crumbs', JSON.stringify(this.$breadcrumb.crumbs))
          } else {
            console.log('remove item')
            localStorage.removeItem('crumbs')
          }
        }
      }

      // beforeDestroy () {
      //   localStorage.setItem('crumbs', JSON.stringify(this.$breadcrumb.crumbs))
      // }
    })
  }
}
