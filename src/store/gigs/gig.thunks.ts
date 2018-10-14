import { Dispatch } from 'redux'

import * as gigActions from './gig.actions'

import gigService from 'services/gig.service'

export const fetchGigs = () => {
  return async (dispatch: Dispatch<gigActions.FETCH_GIG_ACTIONS>) => {
    dispatch(gigActions.fetchGigsRequest())

    try {
      const gigs = await gigService.gigs()
      dispatch(gigActions.fetchGigsSuccess(gigs))
    } catch ( err ) {
      dispatch(gigActions.fetchGigsFailure(err))
    }

  }
}