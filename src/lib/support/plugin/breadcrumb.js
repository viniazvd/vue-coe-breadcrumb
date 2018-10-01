// import * as prototypes from '../../prototypes'

export default {
  install (Vue, router) {
    if (!router) {
      console.error('stack need router')
      return false
    }

    // Vue.mixin({
    //   data () {
    //     return {
    //       breadcrumbs: []
    //     }
    //   }
    // })

    // Object.defineProperty(Vue.prototype, '$breadcrumb', {
    //   get () {
    //     return Object.assign(
    //       {}
    //       // prototypes
    //     )
    //   }
    // })
  }
}
