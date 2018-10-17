import * as React from 'react'
import { FormField, FormGroup, Input } from 'semantic-ui-react'

import { ChangeInputHandler } from './form.types'

interface FieldProps<Data extends object> {
  name: keyof Data
  value: string
  label: string
  type?: 'text' | 'number' | 'password' | 'date' | 'time'
  fluid?: true

  onChange: ChangeInputHandler<Data>
}

class Field<Data extends object> extends React.PureComponent<FieldProps<Data>> {
  public render() {
    const { name, value, label, type, fluid } = this.props
    
    return (
      <FormField>
        <label htmlFor={name as string}>{label}</label>
        <Input name={name} type={type} fluid={fluid} value={value} onChange={this.onChange} />
      </FormField>
    )
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => {
    e.preventDefault()
    e.stopPropagation()

    this.props.onChange({name: this.props.name, value: data.value })
  }
}

type FieldGroupFieldProps<Data extends object> = Pick<FieldProps<Data>, Exclude<keyof FieldProps<Data>, 'fluid' | 'onChange'>>

interface FieldGroupProps<Data extends object> {
  fields: Array<FieldGroupFieldProps<Data>>
  onChange: ChangeInputHandler<Data>
}

export function FieldGroup<Data extends object>(props: FieldGroupProps<Data>) {
  const fields = props.fields.map(field => {
    const fieldProps: FieldProps<Data> = {
      ...field, fluid: true,
      onChange: props.onChange
    }
    return <Field key={fieldProps.name as string} {...fieldProps} />
  })
  return (
    <FormGroup widths="equal">
      {fields}
    </FormGroup>
  )
}

export default Field