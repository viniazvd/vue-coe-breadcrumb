export default {
  install (Vue, config) {
    Object.defineProperty(Vue.prototype, '$breadcrumb', {
      get () {
        return config
      }
    })
  }
}
