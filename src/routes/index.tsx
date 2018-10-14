import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Route from './route.component'

import GigsPage from 'pages/GigsPage'
import HomePage from 'pages/HomePage'

const Routes: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/gigs" component={GigsPage} />
    </Switch>
  )
}

export default Routes