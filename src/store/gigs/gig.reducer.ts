import { FETCH_GIG_ACTIONS } from './gig.actions'
import { GigState, initialState } from './gig.state'

const gigReducer = (state: GigState = initialState(), action: FETCH_GIG_ACTIONS): GigState => {
  switch ( action.type ) {
    case '@Gigs/FETCH_REQUEST':
      return {
        ...state,
        gigs: [],
        error: null,
        loading: true
      }

    case '@Gigs/FETCH_SUCCESS':
      return {
        ...state,
        gigs: action.payload,
        error: null,
        loading: false
      }

    case '@Gigs/FETCH_FAILURE':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default gigReducer