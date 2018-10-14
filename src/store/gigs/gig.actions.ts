import actionCreator from 'store/action-creator'

import { GigModel } from 'models/gig.model'

export const fetchGigsRequest = () => actionCreator('@Gigs/FETCH_REQUEST')
export const fetchGigsSuccess = (gigs: GigModel[]) => actionCreator('@Gigs/FETCH_SUCCESS', gigs)
export const fetchGigsFailure = (error: string) => actionCreator('@Gigs/FETCH_FAILURE', error)

export type FETCH_GIG_ACTIONS = ReturnType<typeof fetchGigsRequest> | ReturnType<typeof fetchGigsSuccess> | ReturnType<typeof fetchGigsFailure>