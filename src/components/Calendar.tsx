import * as React from 'react'
import BigCalendar from 'react-big-calendar'

import * as moment from 'moment'

import { GigModel } from 'models/gig.model'

const localizer = BigCalendar.momentLocalizer(moment)

interface CalendarProps {
  gigs: GigModel[]

  onSelectGig: (gig: GigModel, evt: React.SyntheticEvent) => void
}

const Calendar: React.SFC<CalendarProps> = props => {
  const { gigs, onSelectGig } = props

  return (
    <BigCalendar 
      localizer={localizer}
      events={gigs}
      onSelectEvent={onSelectGig}
    />
  )
}

export default Calendar