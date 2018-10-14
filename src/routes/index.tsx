import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from './routes'

import GigPage from 'pages/GigPage'
import GigsPage from 'pages/GigsPage'
import HomePage from 'pages/HomePage'

const RoutesComponent: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route path={Routes.Home.path} exact={true} component={HomePage} />
      <Route path={Routes.Gigs.path} component={GigsPage} />
      <Route path={Routes.Gig.path} component={GigPage} />
    </Switch>
  )
}

export default RoutesComponent