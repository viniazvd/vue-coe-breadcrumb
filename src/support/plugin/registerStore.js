import crumbStore from '../store'

const registerStore = store => {
  store.registerModule('coe-breadcrumb', { ...crumbStore })
}

export default registerStore
