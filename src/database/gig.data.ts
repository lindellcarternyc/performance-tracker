import { GigModel } from 'models/gig.model'

import * as moment from 'moment'

import gigFactory from 'factories/gig.factory'

const makeDate = (input: string): Date => {
  return moment(input).toDate()
}

const GigCollection: { [id: string]: GigModel } = {

}

const GigInputs = [
  {
    title: 'Tenor Sub - First Pres',
    start: makeDate('2018-10-21 09:00'),
    end: makeDate('2018-10-21 11:00'),
    pay: 100
  },
  {
    title: 'Tenor Sub - First Pres',
    start: makeDate('2018-10-25 19:15'),
    end: makeDate('2018-10-25 21:00'),
    pay: 100
  },
  {
    title: 'Tenor Sub - First Pres',
    start: makeDate('2018-10-28 09:00'),
    end: makeDate('2018-10-28 11:00'),
    pay: 100
  }
]

GigInputs.forEach(input => {
  const gig = gigFactory(input)
  GigCollection[gig.id] = gig
})

const getGigs = () => Promise.resolve(GigCollection)

const addGig = (gig: GigModel) => {
  GigCollection[gig.id] = gig
  return Promise.resolve(gig)
}

export default { 
  getGigs,
  addGig
}