import * as React from 'react'

import { Detail, Title, Wrapper } from './components'

import { GigModel } from 'models/gig.model'

interface GigPageProps {
  gig: GigModel
}

import * as moment from 'moment'

const getTime = (date: Date): string => moment(date).format('h:mm A')

const GigPage: React.SFC<GigPageProps> = ({ gig })=> {
  
  return (
    <Wrapper>
      <Title>{gig.title}</Title>
      <Detail title="Start time" text={getTime(gig.start)} />
      <Detail title="End time" text={getTime(gig.end)} />
      <Detail title="Pay" text={`$${gig.pay}.00`} />
      <Detail title="Location" text={gig.location} />
    </Wrapper>
  )
}

export default GigPage