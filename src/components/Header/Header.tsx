import * as React from 'react'

import { Menu, MenuItem, MenuMenu } from 'semantic-ui-react'

interface HeaderProps {
  onClickHome: () => void
  onClickNewGig: () => void
  onClickGigs: () => void

  activeItem: string
}

const  Header:React.SFC<HeaderProps> = props => {
  return (
    <Menu fixed="top">
      <MenuItem header={true} content="Gig Tracker" onClick={props.onClickHome} />
      <MenuMenu position="right">
        <MenuItem onClick={props.onClickGigs} active={props.activeItem === '/gigs'}>Calendar</MenuItem>
        <MenuItem onClick={props.onClickNewGig} active={props.activeItem === '/new-gig'}>New Gig</MenuItem>
      </MenuMenu>
    </Menu>
  )
}

export default Header