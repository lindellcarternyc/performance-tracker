import * as React from 'react'
import { Button, Form as SemanticForm } from 'semantic-ui-react'

import { ChangeInputHandler, FormAPI, FormFieldGroup, FormProps, FormState } from './form.types'

import Title from 'components/Title'

function getInitialDataFromFields<Data extends object>(fields: FormFieldGroup<Data>): Data {
  const data = Object.keys(fields).reduce((d, key) => {
    return Object.assign({}, d, { [key]: fields[key].initialValue })
  }, { } as Data)
  return data
}

class Form<Data extends object> extends React.Component<FormProps<Data>, FormState<Data>> {
  public readonly state: FormState<Data> = {
    data: getInitialDataFromFields(this.props.fields)
  }
  public render() {
    const { title, handlers } = this.props
    return (
      <div
        style={{marginBottom: '2.5rem'}}
      >
        <Title>{title}</Title>
        {/* {JSON.stringify(this.state)} */}
        <SemanticForm onSubmit={this.handleSubmit}>
          {this.props.children(this.api)}
          <SemanticForm.Group>
            <Button content={handlers.reset.label} onClick={this.handleReset} />
            <Button content={handlers.submit.label} disabled={!this.isValid} />
          </SemanticForm.Group>
        </SemanticForm>
      </div>
    )
  }

  private get api(): FormAPI<Data> {
    return {
      data: this.state.data,
      change: {
        input: this.onChangeInput
      }
    }
  }

  private get isValid(): boolean {
    for ( const key of Object.keys(this.state.data) ) {
      const value = this.state.data[key] as string
      if ( value.length < 1 ) {
        return false
      }
    }

    return true
  }

  private handleReset = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    return this.setState({ data: getInitialDataFromFields(this.props.fields)})
  }

  private handleSubmit = (e: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    // tslint:disable:no-console
    console.group('Form.handleSubmit')
    console.dir(this.state.data)
    console.groupEnd()
    
    if ( !this.isValid ) { return }

    this.props.handlers.submit.action(this.state.data)
  }

  private onChangeInput: ChangeInputHandler<Data> = ({ name, value }) => {
    return this.setState(({ data }) => {
      return {
        data: Object.assign({}, data, {[name]: value})
      }
    })
  
  }
}

export default Form