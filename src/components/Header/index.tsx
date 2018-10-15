import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import HeaderComponent from './Header'

type HeaderProps = RouteComponentProps<{}>

class HeaderContainer extends React.Component<HeaderProps> {
  public render() {
    return (
      <HeaderComponent 
        onClickHome={this.navigateTo('/')} 
        onClickNewGig={this.navigateTo('/new-gig')}
        onClickGigs={this.navigateTo('/gigs')}
        activeItem={this.props.location.pathname}
      />
    )
  }

  private navigateTo = (path: '/' | '/new-gig' | '/gigs') => () => {
    this.props.history.push(path)
  }
}

const Header = withRouter(HeaderContainer)
export default Header