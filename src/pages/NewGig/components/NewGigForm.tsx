import * as React from 'react'

import { GigFormModel } from 'models/gig.model'

import { Field, FieldGroup, Form } from 'components/Form'

interface NewGigFormProps {
  onSubmit: (data: GigFormModel) => void
}

const NewGigForm: React.SFC<NewGigFormProps> = props => {
  return (
    <Form<GigFormModel> 
      title="New Gig"
      handlers={{
        reset: { label: 'Clear' },
        submit: {
          label: 'Add Gig',
          action: props.onSubmit
        }
      }}
      fields={{
        title: { initialValue: '' },
        startDate: { initialValue: ''},
        startTime: { initialValue: ''},
        endDate: { initialValue: '' },
        endTime: { initialValue: '' },
        pay: { initialValue: '' },
        location: { initialValue: ''}
      }}
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

export default NewGigForm