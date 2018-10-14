import { GigModel } from 'models/gig.model'

import * as moment from 'moment'

const makeDate = (input: string): Date => {
  return moment(input).toDate()
}

const GigCollection: GigModel[] = [
  {
    title: 'Tenor Sub - First Pres',
    start: makeDate('2018-10-21 09:00'),
    end: makeDate('2018-10-21 11:00')
  },
  {
    title: 'Tenor Sub - First Pres',
    start: makeDate('2018-10-25 19:15'),
    end: makeDate('2018-10-25 21:00')
  },
  {
    title: 'Tenor Sub - First Pres',
    start: makeDate('2018-10-28 09:00'),
    end: makeDate('2018-10-28 11:00')
  }
]

const getGigs = () => Promise.resolve(GigCollection)

export default { 
  getGigs
}