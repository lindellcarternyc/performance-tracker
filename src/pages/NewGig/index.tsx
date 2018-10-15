import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { RouteComponentProps, withRouter } from 'react-router-dom'

import { StoreState } from 'store/store.state'

import { createGig } from 'store/gigs/gig.thunks'

import { NewGigModel } from 'models/gig.model'

import Title from 'components/Title'
import NewGigForm from './components/NewGigForm'

interface NewGigPageStateProps {
  loading: boolean
  error: string | null
}

interface NewGigPageDispatchProps {
  createGig: (newGig: NewGigModel) => void
}

type NewGigPageProps = NewGigPageStateProps & NewGigPageDispatchProps & RouteComponentProps<{}>

class NewGigPageContainer extends React.Component<NewGigPageProps> {
  public componentWillReceiveProps(nextProps: NewGigPageProps) {
    const { loading, error } = nextProps
    if ( this.props.loading === true && loading === false && error === null ) {
      this.props.history.push('/gigs')
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

  private onSubmitNewGig = (newGig: NewGigModel) => {
    this.props.createGig(newGig)
  }
}

const mapStateToProps = (state: StoreState): NewGigPageStateProps => {
  const {
    error, loading
  } = state.gigState
  return {
    error, loading
  }
}

const mapDispatchToProps = (dispatch: Dispatch): NewGigPageDispatchProps => {
  return {
    createGig: newGig => dispatch(createGig(newGig) as any)
  }
}

const NewGigPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigPageContainer))

export default NewGigPage