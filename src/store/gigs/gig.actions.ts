import actionCreator from 'store/action-creator'

import { GigFormModel, GigModel, UpdateGigParams } from 'models/gig.model'

export const fetchGigsRequest = () => actionCreator('@Gigs/FETCH_REQUEST')
export const fetchGigsSuccess = (gigs: { [id: string]: GigModel }) => actionCreator('@Gigs/FETCH_SUCCESS', gigs)
export const fetchGigsFailure = (error: string) => actionCreator('@Gigs/FETCH_FAILURE', error)

export type FETCH_GIG_ACTIONS = ReturnType<typeof fetchGigsRequest> | ReturnType<typeof fetchGigsSuccess> | ReturnType<typeof fetchGigsFailure>

export const createGigRequest = (newGig: GigFormModel) => actionCreator('@Gigs/CREATE_GIG_REQUEST', newGig)
export const createGigSuccess = (newGig: GigModel) => actionCreator('@Gigs/CREATE_GIG_SUCCESS', newGig)
export const createGigError = (error: string) => actionCreator('@Gigs/CREATE_GIG_ERROR', error)

export type CREATE_GIG_ACTIONS = ReturnType<typeof createGigRequest> | ReturnType<typeof createGigSuccess> | ReturnType<typeof createGigError>

export const deleteGigRequest = (id: string) => actionCreator('@Gigs/DELETE_GIG_REQUEST', id)
export type DELETE_GIG_ACTIONS = ReturnType<typeof deleteGigRequest>

export const updateGigRequest = (params: UpdateGigParams) => actionCreator('@Gigs/UPDATE_GIG_REQUEST', params)
export type UPDATE_GIG_ACTIONS = ReturnType<typeof updateGigRequest>

export type GIG_ACTIONS = FETCH_GIG_ACTIONS | CREATE_GIG_ACTIONS | DELETE_GIG_ACTIONS | UPDATE_GIG_ACTIONS