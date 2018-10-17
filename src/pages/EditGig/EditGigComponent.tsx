import * as React from 'react'

import * as moment from 'moment'

import { Field, FieldGroup, Form, FormFieldGroup } from 'components/Form'
import { GigFormModel, GigModel } from 'models/gig.model'

const parseDate = (dateObj: Date): [string, string] => {
  const m = moment(dateObj)
  const formatStr = m.format('YYYY-MM-DD kk:mm')
  const [date, time] = formatStr.split(' ')
  return [date, time]
}

const parseToFormModel = (gigModel: GigModel): GigFormModel => {
  const { title, pay, location, start, end } = gigModel
  
  const [startDate, startTime] = parseDate(start)
  const [endDate, endTime] = parseDate(end)

  const formModel: GigFormModel = {
    title,
    pay: pay.toString(),
    location,
    startDate,
    startTime,
    endDate,
    endTime
  }
  
  return formModel
}

const fieldsFromFormModel = (gigFormModel: GigFormModel): FormFieldGroup<GigFormModel> => {
  const returnFields = Object.keys(gigFormModel).reduce<FormFieldGroup<GigFormModel>>((fields, key) => {
    return Object.assign({}, fields, { [key]: { initialValue: gigFormModel[key] } })
  }, { } as FormFieldGroup<GigFormModel>)
  
  return returnFields
}

interface EditGigPageProps {
  editGigModel: GigModel
  editGig: (data: GigFormModel) => void
}

const EditGigPage: React.SFC<EditGigPageProps> = props => {
  const { editGigModel } = props
  const formModel = parseToFormModel(editGigModel)
  const fields = fieldsFromFormModel(formModel)

  return (
    <Form<GigFormModel> 
      title="Edit Gig"
      handlers={{
        submit: { 
          label: 'Edit Gig',
          action: props.editGig
        },
        reset: { label: 'Reset Changes' }
      }}

      fields={fields}
    >
      {({ data, change }) => {
        return (
          <>
            <Field<GigFormModel> 
              name="title"
              value={data.title}
              label="Title"
              onChange={change.input}
            />
            <FieldGroup<GigFormModel> 
              fields={[
                {
                  name: 'startDate',
                  value: data.startDate,
                  type: 'date',
                  label: 'Start date'
                }, {
                  name: 'startTime',
                  value: data.startTime,
                  type: 'time',
                  label: 'Start time'
                }
              ]}
              onChange={change.input}
            />
            <FieldGroup 
              onChange={change.input}
              fields={[
                {
                  name: 'endDate',
                  value: data.endDate,
                  label: 'End date',
                  type: 'date'
                }, {
                  name: 'endTime',
                  value: data.endTime,
                  label: 'End time',
                  type: 'time'
                }
              ]}
            />
            <Field 
              onChange={change.input}
              name="pay"
              type="number"
              value={data.pay}
              label="Pay"
            />
            <Field 
              onChange={change.input}
              name="location"
              value={data.location}
              label="Location"
            />
          </>
        )
      }}
    </Form>
  )
}

export default EditGigPage