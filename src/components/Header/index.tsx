import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import HeaderComponent from './Header'

type HeaderProps = RouteComponentProps<{}>

class HeaderContainer extends React.Component<HeaderProps> {
  public render() {
    return (
      <HeaderComponent onClickHome={this.navigateTo('/')} onClickNewGig={this.navigateTo('/new-gig')}/>
    )
  }

  private navigateTo = (path: '/' | '/new-gig') => () => {
    this.props.history.push(path)
  }
}

const Header = withRouter(HeaderContainer)
export default Header