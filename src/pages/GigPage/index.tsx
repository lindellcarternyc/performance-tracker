import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'

import { StoreState } from 'store/store.state'

import { deleteGig } from 'store/gigs/gig.thunks'

import GigPageComponent from './GigPage.component'

import { GigModel } from 'models/gig.model'

interface GigPageStateProps {
  gig: (id: string) => GigModel | undefined
  loading: boolean
  error: string | null
}

interface GigPageDispatchProps {
  deleteGig: (id: string) => void
}

type GigPageProps = GigPageStateProps & GigPageDispatchProps & RouteComponentProps<{id: string}>



class GigPageContainer extends React.Component<GigPageProps> {
  
  public render() {
    if ( this.props.loading ) {
      return 'Loading'
    } else if ( this.props.error ) {
      return 'Error'
    } 

    if ( this.gig === undefined ) {
      return 'No Gig'
    }
    return <GigPageComponent gig={this.gig} onClickDelete={this.onClickDelete} />
  }

  private get gig(): GigModel | undefined {
    const id = this.props.match.params.id
    return this.props.gig(id)
  }

  private onClickDelete = (id: string) => {
    this.props.deleteGig(id)
    this.props.history.push('/gigs')
  }
}

const mapStateToProps = (state: StoreState): GigPageStateProps => {
  // const id = 'id'
  return {
    gig: id => state.gigState.gigs[id],
    loading: state.gigState.loading,
    error: state.gigState.error
  }
}

const mapDispatchToProps = (dispatch: Dispatch): GigPageDispatchProps => {
  return {
    deleteGig: id => dispatch(deleteGig(id) as any)
  }
}

const GigPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(GigPageContainer))
export default GigPage