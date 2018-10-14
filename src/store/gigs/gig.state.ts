import { GigModel } from 'models/gig.model'

export interface GigState {
  gigs: { [id: string]: GigModel }
  loading: boolean
  error: string | null
}

export const initialState = (): GigState => {
  return {
    gigs: { },
    loading: false,
    error: null
  }
}