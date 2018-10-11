import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store, options = {}) {
    if (!store) {
      console.error('stack need store')
      return false
    }

    let { storeName, delay, separatorText, loaderMsg, hidden } = options

    if (!storeName) storeName = 'coebreadcrumb'
    if (!delay || delay < 501) delay = 501
    if (!separatorText) separatorText = '|'
    if (!loaderMsg) loaderMsg = 'loading...'
    if (!hidden) hidden = []

    store.dispatch('BREADCRUMB_SET_SEPARATOR', separatorText)
    store.dispatch('BREADCRUMB_SET_LOADER', loaderMsg)
    store.dispatch('BREADCRUMB_SET_HIDDEN', hidden)

    registerStore(store, storeName)

    Object.defineProperty(Vue.prototype, '$breadcrumb', {
      get () {
        return crumbFactory(this)
      }
    })

    Vue.mixin({
      mounted () {
        if (this.$options.breadcrumb) {
          const { getters: λ, name } = this.$options.breadcrumb

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
