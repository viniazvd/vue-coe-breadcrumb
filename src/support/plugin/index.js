import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store, options) {
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

    let { delay, separatorText, loaderMsg } = options

    if (!delay) delay = 500
    if (!loaderMsg) loaderMsg = 'loading...'
    if (!separatorText) separatorText = '|'

    Vue.mixin({
      mounted () {
        if (this.$options.breadcrumb) {
          const { getters: λ, name } = this.$options.breadcrumb

          this.$breadcrumb.setSeparator(separatorText)
          this.$breadcrumb.setLoader(loaderMsg)
          this.$breadcrumb.loader(true)

          setTimeout(() => {
            this.$breadcrumb.syncStore(store.getters[λ], name)
            this.$breadcrumb.loader(false)
          }, delay)

          store.watch(() => store.getters[λ], crumb => this.$breadcrumb.syncStore(crumb, name))

          // store.subscribeAction((action) => {
          //   if (action.type === 'BREADCRUMB_SYNC_ROUTE') {
          //     console.log((action.payload.params.length && action.payload.params) || action.payload)
          //   }
          // })
        }
      }
    })
  }
}
