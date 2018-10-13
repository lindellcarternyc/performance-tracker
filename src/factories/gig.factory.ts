import * as moment from 'moment'

import { GigModel } from 'models/gig.model'


type GigFactoryParams = Partial<GigModel>

const gigFactory = (params: GigFactoryParams = { }): GigModel => {
  return {
    start: params.start || new Date(),
    end: params.end || moment().add(1, 'hour').toDate(),
    title: 'New Gig'
  }
}

export default gigFactory