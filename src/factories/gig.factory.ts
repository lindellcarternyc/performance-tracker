import * as moment from 'moment'

import { GigModel, NewGigModel } from 'models/gig.model'


type GigFactoryParams = Partial<GigModel>

const generateGigId = (params: { title: string, start: Date, end: Date} ): string => `GIG__${params.title}--${params.start}--${params.end}`

const generateDate = (params: { date: string, time: string }): Date => {
  return moment(params.date + ' ' + params.time, 'YYYY-MM-DD kk:mm').toDate()
}

const gigFactory = (params: GigFactoryParams = { }): GigModel => {
  const start = params.start || new Date()
  const end = params.end || moment().add(1, 'hour').toDate()
  const title = params.title || 'New Gig'
  const pay = params.pay || 0
  const location = params.location || 'Location'

  const id = generateGigId({ title, start, end })

  return {
    start, end, title,
    pay, location, id
  }
}

export const parseNewGigModel = (newGig: NewGigModel): GigModel => {
  const {
    title, start, end, pay, location
  } = newGig

  const startDate = generateDate(start)
  const endDate = generateDate(end)

  const id = generateGigId({ title, start: startDate, end: endDate })

  return {
    id,
    title,
    start: startDate,
    end: endDate,
    pay: parseInt(pay, 10),
    location
  }
}

export default gigFactory