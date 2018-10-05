import crumbStore from '../store'

const registerStore = store => {
  store.registerModule('coebreadcrumb', { ...crumbStore })
}

export default registerStore
