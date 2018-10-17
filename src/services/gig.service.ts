import { parseNewGigModel } from 'factories/gig.factory'
import { GigFormModel, GigModel, GigModelCollection, UpdateGigParams } from 'models/gig.model'

import Database from 'database/firebase'
import { DatabaseCollection, DatabaseModel } from 'database/types'

import * as moment from 'moment'

const parseDate = (input: string) => moment(input).toDate()
const deserializeGig = (databaseGig: DatabaseModel<GigModel>): GigModel => {
  const { id, title, location } = databaseGig
  const start = parseDate(databaseGig.start)
  const end = parseDate(databaseGig.end)
  const pay = parseInt(databaseGig.pay, 10)

  return {
    id, title, pay, location,
    start, end
  }
}
const serializeGig = (gig: GigModel): DatabaseModel<GigModel> => {
  const { title, location, id } = gig
  const pay = gig.pay.toString()
  const start = gig.start.toString()
  const end = gig.end.toString()

  return {
    title,
    id,
    location,
    pay,
    start,
    end
  }
}

const db = new Database()

const deserialiazeGigCollection = (collection: DatabaseCollection<GigModel>): GigModelCollection => {
  return Object.keys(collection).reduce((acc, id) => {
    return { ...acc, [id]: deserializeGig(collection[id]) }
  }, { })
}

const subscribeToGigs = (cb: (gigs: GigModelCollection) => void) => {
  db.subscribe('gigs', collection => {
    const deserialized = deserialiazeGigCollection(collection)
    cb(deserialized)
  })
}

const gigs = async (): Promise<{[id: string]: GigModel}> => {
  return db.getGigs<GigModel>()
  .then(dbGigModels => {
    const gigCollection = Object.keys(dbGigModels).reduce((acc, id) => {
      const gig = deserializeGig(dbGigModels[id])
      return { ...acc, [gig.id]: gig }
    }, { })
    // tslint:disable-next-line:no-console
    return gigCollection
  })
}

const createGig = (newGig: GigFormModel)  => {
  const gigModel = parseNewGigModel(newGig)
  const serialized = serializeGig(gigModel)
  db.create('gig', serialized)
  return gigModel
}

const updateGig = (params: UpdateGigParams) => {
  const gigModel: GigModel = {
    ...parseNewGigModel(params.updateModel),
    id: params.id
  }
  const serialized = serializeGig(gigModel)
  db.update(serialized)
}

const deleteGig = (id: string) => db.deleteGig(id)

export default {
  gigs,
  createGig,
  subscribeToGigs,
  deleteGig,
  updateGig
}