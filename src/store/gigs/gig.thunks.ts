import { Dispatch } from 'redux'

import * as gigActions from './gig.actions'

import { NewGigModel } from 'models/gig.model'
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

export const createGig = (newGig: NewGigModel) => {
  return async (dispatch: Dispatch<gigActions.CREATE_GIG_ACTIONS>) => {
    dispatch(gigActions.createGigRequest(newGig))

    try {
      const gig = await gigService.createGig(newGig)
      dispatch(gigActions.createGigSuccess(gig))
    } catch (err) {
      dispatch(gigActions.createGigError(err))
    }
  }
}

export const deleteGig = (id: string) => {
  return async (dispatch: Dispatch<gigActions.DELETE_GIG_ACTIONS>) => {
    dispatch(gigActions.deleteGigRequest(id))

    gigService.deleteGig(id)
  }
}