import * as React from 'react'
import { Button } from 'semantic-ui-react'

import { DeleteGigModal, Detail, Title, Wrapper } from './components'

import { GigModel } from 'models/gig.model'



import * as moment from 'moment'

const getTime = (date: Date): string => moment(date).format('h:mm A')

interface GigPageProps {
  gig: GigModel

  onClickDelete: (id: string) => void
  onClickEdit: (id: string) => void
}

interface GigPageState {
  isDeleteModalOpen: boolean
}

class GigPage extends React.Component<GigPageProps, GigPageState> {
  public readonly state: GigPageState = {
    isDeleteModalOpen: false
  }

  public render() {
    const { gig } = this.props
    return (
      <>
        <DeleteGigModal isOpen={this.state.isDeleteModalOpen} onClose={this.onCloseModal} confirm={this.confirmDelete} />
        <Wrapper>
          <Title>{gig.title}</Title>
          <Button.Group>
            <Button onClick={this.onClickEdit}>Edit</Button>
            <Button.Or />
            <Button onClick={this.onClickDelete}>Delete</Button>
          </Button.Group>
          <Detail title="Start time" text={getTime(gig.start)} />
          <Detail title="End time" text={getTime(gig.end)} />
          <Detail title="Pay" text={`$${gig.pay}.00`} />
          <Detail title="Location" text={gig.location} />
        </Wrapper>
      </>
    )
  }

  private onClickDelete = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({isDeleteModalOpen: true})
  }

  private onCloseModal = () => {
    this.setState({ isDeleteModalOpen: false })
  }

  private confirmDelete = () => {
    this.setState({isDeleteModalOpen: false})
    this.props.onClickDelete(this.props.gig.id)
  }

  private onClickEdit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    this.props.onClickEdit(this.props.gig.id)
  }
}

export default GigPage