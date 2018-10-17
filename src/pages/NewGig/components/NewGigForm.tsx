import * as React from 'react'

import { Button, Form, FormGroup } from 'semantic-ui-react'

import { GigFormModel } from 'models/gig.model'

import Field from './Field'

const isValid = (value: string): boolean => value.length > 0

interface NewGigFormProps {
  onSubmit: (data: GigFormModel) => void
}

type NewGigFormState = GigFormModel

const initialState = (): NewGigFormState => {
  return {
    title: '',
    start: {
      date: '',
      time: ''
    },
    end: {
      date: '',
      time: ''
    },
    pay: '',
    location: ''
  }
}

class NewGigForm extends React.Component<NewGigFormProps, NewGigFormState> {
  public readonly state: NewGigFormState = initialState()

  public render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Field name="title" label="Title" value={this.state.title} onChange={this.onChange}/>
        <FormGroup widths="equal">
          <Field name="start-date" label="Start date" type='date' fluid={true} value={this.state.start.date} onChange={this.onChange} />
          <Field name="start-time" label="Start time" type="time" fluid={true} value={this.state.start.time} onChange={this.onChange} />
        </FormGroup>
        <FormGroup widths="equal">
          <Field name="end-date" label="End date" type='date' fluid={true} value={this.state.end.date} onChange={this.onChange} />
          <Field name="end-time" label="End time" type="time" fluid={true} value={this.state.end.time} onChange={this.onChange} />
        </FormGroup>
        <Field name="pay" type="number" label="Pay" value={this.state.pay} onChange={this.onChange} />
        <Field name="location" label="Location" value={this.state.location} onChange={this.onChange} />
        <FormGroup>
          <Button content='Add Gig' type='submit' disabled={!this.isValid}/>
          <Button content='Clear' onClick={this.reset} />
        </FormGroup>
      </Form>
    )
  }

  private onSubmit = (e: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if ( this.isValid ) {
      this.props.onSubmit(this.state)
    }
  }

  private reset = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    return this.setState(initialState())
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => {
    e.preventDefault()
    e.stopPropagation()

    const targetName = e.target.name
    
    if ( targetName === 'title' || targetName === 'pay' || targetName === 'location' ) {
      return this.setState((state) => {
        return {
          ...state,
          [targetName]: data.value
        }
      })
    }

    const [id, name] = targetName.split('-') as ['start' | 'end', 'date' | 'time']

    return this.setState(state => {
      return {
        ...state,
        [id]: {
          ...state[id],
          [name]: data.value
        }
      }
    })

  }

  private get isValid(): boolean {
    const { title, start, end, pay, location } = this.state
    return isValid(title) && isValid(start.date) && isValid(start.time)
      && isValid(end.date) && isValid(end.time)
      && isValid(pay) && isValid(location)
  }
}

export default NewGigForm