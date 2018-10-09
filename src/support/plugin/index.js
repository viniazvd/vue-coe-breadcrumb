import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store, options = {}) {
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

    let { delay, separatorText, loaderMsg, hidden } = options

    if (!delay || delay < 501) delay = 501
    if (!separatorText) separatorText = '|'
    if (!loaderMsg) loaderMsg = 'loading...'
    if (!hidden) hidden = []

    Vue.mixin({
      mounted () {
        if (this.$options.breadcrumb) {
          const { getters: λ, name } = this.$options.breadcrumb

          this.$breadcrumb.setHidden(hidden)
          this.$breadcrumb.setSeparator(separatorText)
          this.$breadcrumb.setLoader(loaderMsg)
          this.$breadcrumb.loader(true)

          setTimeout(() => {
            this.$breadcrumb.syncStore(store.getters[λ], name)
            this.$breadcrumb.loader(false)
          }, delay)

          store.watch(() => store.getters[λ], crumb => this.$breadcrumb.syncStore(crumb, name))
        }
      }
    })
  }
}
