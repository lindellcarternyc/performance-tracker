import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { RouteComponentProps, withRouter } from 'react-router-dom'

import { StoreState } from 'store/store.state'

import { createGig } from 'store/gigs/gig.thunks'

import { GigFormModel } from 'models/gig.model'

import Title from 'components/Title'
import NewGigForm from './components/NewGigForm'

interface NewGigPageStateProps {
  gigIds: string[]
}

interface NewGigPageDispatchProps {
  createGig: (newGig: GigFormModel) => void
}

type NewGigPageProps = NewGigPageStateProps & NewGigPageDispatchProps & RouteComponentProps<{}>

interface NewGigPageState {
  loading: boolean
}

class NewGigPageContainer extends React.Component<NewGigPageProps> {
  public readonly state: NewGigPageState = {
    loading: false
  }
  
  public componentDidUpdate(prevProps: NewGigPageProps) {
    if ( this.state.loading ) {
      // tslint:disable-next-line:no-console
      if ( this.props.gigIds.length > prevProps.gigIds.length ) {
        this.setState({ loading: false })
        return this.props.history.push('/gigs')
      }
    }
  }

  public render() {
    return (
      <div
        style={{
          marginBottom: '2.5rem'
        }}
      >
        <Title>New Gig</Title>
        <NewGigForm onSubmit={this.onSubmitNewGig} />
      </div>
    )
  }

  private onSubmitNewGig = (newGig: GigFormModel) => {
    this.props.createGig(newGig)
    return this.setState({loading: true})
  }
}

const mapStateToProps = (state: StoreState): NewGigPageStateProps => {
  return {
    gigIds: Object.keys(state.gigState.gigs)
  }
}

const mapDispatchToProps = (dispatch: Dispatch): NewGigPageDispatchProps => {
  return {
    createGig: newGig => dispatch(createGig(newGig) as any)
  }
}

const NewGigPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigPageContainer))

export default NewGigPage