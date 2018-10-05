import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store, delay = 500, loader) {
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
      mounted () {
        if (this.$options.breadcrumb) {
          const { getters: λ, name } = this.$options.breadcrumb

          this.$breadcrumb.setLoader(loader)

          this.$breadcrumb.loader(true)

          setTimeout(() => {
            this.$breadcrumb.update(store.getters[λ], name)
            this.$breadcrumb.loader(false)
          }, delay)

          store.watch(() => store.getters[λ], crumb => this.$breadcrumb.update(crumb, name))
        }
      }
    })
  }
}
