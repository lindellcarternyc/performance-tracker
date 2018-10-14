import { combineReducers, Reducer } from 'redux'

import gigs from './gigs/gig.reducer'
import { StoreState } from './store.state'

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
  gigState: gigs
})

export default rootReducer