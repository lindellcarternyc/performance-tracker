import * as React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

interface DeleteGigModalProps {
  isOpen: boolean

  onClose: () => void
  confirm: () => void
}

const DeleteGigModal: React.SFC<DeleteGigModalProps> = props => {
  return (
    <Modal open={props.isOpen} onClose={props.onClose} basic={true} >
      <Header content="Delete this gig?"/>
      <Modal.Content>
        <h3>Are you sure you want to delete this gig?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Cancel" inverted={true} onClick={props.onClose}/>
        <Button content="Delete" color="red" inverted={true}onClick={props.confirm} />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteGigModal