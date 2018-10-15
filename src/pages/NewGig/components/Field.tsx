import * as React from 'react'
import { FormField, Input } from 'semantic-ui-react'

interface FieldProps {
  name: string
  label: string
  type?: 'text' | 'number' | 'password' | 'date' | 'time'
  fluid?: true
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => void
}

const Field: React.SFC<FieldProps> = props => {
  return (
    <FormField>
      <label htmlFor={props.name}>{props.label}:</label>
      <Input name={props.name} type={props.type} fluid={props.fluid} onChange={props.onChange} value={props.value} />
    </FormField>
  )
}

export default Field