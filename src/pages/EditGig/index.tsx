import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'
import { Dispatch } from 'redux'

import { GigFormModel, GigModel, UpdateGigParams } from 'models/gig.model'

import { StoreState } from 'store/store.state'

import { updateGig } from 'store/gigs/gig.thunks'

import EditGigComponent from './EditGigComponent'

interface EditGigStateProps {
  gig: (id: string) => GigModel | undefined
}

interface EditGigDispatchProps {
  editGig: (params: UpdateGigParams) => void
}

type EditGigProps = RouteComponentProps<{id: string}> & EditGigStateProps & EditGigDispatchProps

class EditGigContainer extends React.Component<EditGigProps> {
  public render() {
    if ( this.gig === undefined ) {
      return <Redirect to="/gigs" />
    }
    
    return (
      <EditGigComponent editGigModel={this.gig} editGig={this.editGig} />
    )
  }

  private get gig(): GigModel | undefined {
    const { id } = this.props.match.params
    return this.props.gig(id)
  }

  private editGig = (data: GigFormModel) => {
    if ( this.gig === undefined ) { return }

    this.props.editGig({
      id: this.gig.id,
      updateModel: data
    })

    this.props.history.push(`/gig/${this.gig.id}`)
  }
}

const mapStateToProps = (state: StoreState): EditGigStateProps => {
  return {
    gig: id => state.gigState.gigs[id]
  }
}

const mapDispatchToProps = (dispatch: Dispatch): EditGigDispatchProps => {
  return {
    editGig: params => dispatch(updateGig(params) as any)
  }
}

const EditGig = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditGigContainer))
export default EditGig