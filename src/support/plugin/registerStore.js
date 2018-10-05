import crumbStore from '../store'

const registerStore = store => {
  store.registerModule('breadcrumb', { ...crumbStore })
}

export default registerStore
