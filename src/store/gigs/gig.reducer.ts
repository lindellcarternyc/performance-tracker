import { GIG_ACTIONS} from './gig.actions'
import { GigState, initialState } from './gig.state'

const gigReducer = (state: GigState = initialState(), action: GIG_ACTIONS): GigState => {
  switch ( action.type ) {
    case '@Gigs/FETCH_REQUEST':
      return {
        ...state,
        gigs: { },
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

    case '@Gigs/CREATE_GIG_REQUEST':
      return {
        ...state,
        loading: true
      }

    case '@Gigs/CREATE_GIG_SUCCESS':
      return {
        ...state,
        gigs: {
          ...state.gigs,
          [action.payload.id]: action.payload
        },
        loading: false,
        error: null
      }

    case '@Gigs/CREATE_GIG_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case '@Gigs/DELETE_GIG_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }

    case '@Gigs/UPDATE_GIG_REQUEST':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default gigReducer