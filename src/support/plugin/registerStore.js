import crumbStore from '../store'

const registerStore = (store, storeName) => {
  store.registerModule(storeName, { ...crumbStore })
}

export default registerStore
