import { createStore, Store } from 'redux'

import middleware from './middleware'
import rootReducer from './reducer'
import { StoreState } from './store.state'

const initStore = (): Store<StoreState> => {
  const store = createStore(rootReducer, middleware)
  return store
}

export default initStore