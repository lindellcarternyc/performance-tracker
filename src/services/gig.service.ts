import gigData from 'database/gig.data'

import { parseNewGigModel } from 'factories/gig.factory'
import { GigModel, NewGigModel } from 'models/gig.model'

const gigs = () => gigData.getGigs()

const createGig = async (newGig: NewGigModel): Promise<GigModel> => {
  const gigModel = parseNewGigModel(newGig)
  return gigData.addGig(gigModel)
}

export default {
  gigs,
  createGig
}