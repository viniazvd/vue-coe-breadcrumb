import crumbFactory from './crumbFactory'
import registerStore from './registerStore'

export default {
  install (Vue, store) {
    if (!store) {
      console.error('stack need store')
      return false
    }

    registerStore(store)

    Object.defineProperty(Vue.prototype, '$loader', {
      get () {
        return crumbFactory(this)
      }
    })
  }
}
