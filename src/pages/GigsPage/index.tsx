import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'

import Calendar from 'components/Calendar'
import { GigModel } from 'models/gig.model'
import { StoreState } from 'store/store.state'

import { fetchGigs } from 'store/gigs/gig.thunks'

interface GigsPageStateProps {
  gigs: GigModel[]
}

interface GigsPageDispatchProps {
  fetchGigs: () => void
}

type GigsPageProps = GigsPageStateProps & GigsPageDispatchProps & RouteComponentProps<{}>

class GigsPage extends React.Component<GigsPageProps> {
  public componentDidMount() {
    this.props.fetchGigs()
  }
  public render() {
    return (
      <Calendar gigs={this.props.gigs} onSelectGig={this.onSelectGig} />
    )
  }

  private onSelectGig = (gig: GigModel, evt: React.SyntheticEvent) => {
    evt.preventDefault()
    evt.stopPropagation()

    alert(JSON.stringify(gig))
  }
}

const mapStateToProps = (state: StoreState): GigsPageStateProps => {
  return {
    gigs: Object.keys(state.gigState.gigs).map(id => state.gigState.gigs[id])
  }
}

const mapDispatchToProps = (dispatch: Dispatch): GigsPageDispatchProps => {
  return {
    fetchGigs: () => dispatch(fetchGigs() as any)
  }
}

const wrapped = withRouter(connect(mapStateToProps, mapDispatchToProps)(GigsPage))
export default wrapped