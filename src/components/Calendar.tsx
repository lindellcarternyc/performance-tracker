import * as React from 'react'
import BigCalendar from 'react-big-calendar'

import * as moment from 'moment'

import { GigModel } from 'models/gig.model'

const localizer = BigCalendar.momentLocalizer(moment)

interface CalendarProps {
  gigs: GigModel[]
}

const Calendar: React.SFC<CalendarProps> = props => {
  const { gigs } = props

  return (
    <BigCalendar 
      localizer={localizer}
      events={gigs}
    />
  )
}

export default Calendar