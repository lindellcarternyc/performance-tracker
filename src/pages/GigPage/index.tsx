import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { StoreState } from 'store/store.state'

import GigPageComponent from './GigPage.component'

import { GigModel } from 'models/gig.model'

interface GigPageStateProps {
  gig: (id: string) => GigModel | undefined
  loading: boolean
  error: string | null
}

type GigPageProps = GigPageStateProps & RouteComponentProps<{id: string}>

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
    return <GigPageComponent gig={this.gig} />
  }

  private get gig(): GigModel | undefined {
    const id = this.props.match.params.id
    return this.props.gig(id)
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

const GigPage = withRouter(connect(mapStateToProps)(GigPageContainer))
export default GigPage