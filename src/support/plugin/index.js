import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store, options = {}) {
    if (!store) {
      console.error('stack need store')
      return false
    }

    let { storeName, separatorText, hidden } = options

    if (!storeName) storeName = 'coebreadcrumb'
    if (!separatorText) separatorText = '|'
    if (!hidden) hidden = []

    registerStore(store, storeName)

    store.dispatch('BREADCRUMB_SET_SEPARATOR', separatorText)
    store.dispatch('BREADCRUMB_SET_HIDDEN', hidden)

    Object.defineProperty(Vue.prototype, '$breadcrumb', {
      get () {
        return crumbFactory(this)
      }
    })

    Vue.mixin({
      mounted () {
        if (this.$options.breadcrumb) {
          const { getters: λ, name } = this.$options.breadcrumb

          store.watch(() => store.getters[λ], label => this.$breadcrumb.syncStore(label, name))
        }
      }
    })
  }
}
