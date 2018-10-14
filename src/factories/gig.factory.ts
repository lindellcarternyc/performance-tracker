import * as moment from 'moment'

import { GigModel } from 'models/gig.model'


type GigFactoryParams = Partial<GigModel>

const gigFactory = (params: GigFactoryParams = { }): GigModel => {
  const start = params.start || new Date()
  const end = params.end || moment().add(1, 'hour').toDate()
  const title = params.title || 'New Gig'
  const pay = params.pay || 0
  const location = params.location || 'Location'

  const id = `GIG__${title}--${start}--${end}`

  return {
    start, end, title,
    pay, location, id
  }
}

export default gigFactory