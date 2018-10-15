import * as React from 'react'

import { Button, Title, Wrapper } from './styled-components'

interface HeaderProps {
  onClickHome: () => void
  onClickNewGig: () => void
}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <Wrapper>
      <Button onClick={props.onClickHome}>Home</Button>
      <Title>Performance Tracker</Title>
      <Button onClick={props.onClickNewGig}>New Gig</Button>
    </Wrapper>
  )
}

export default Header