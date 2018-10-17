import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from './routes'

import EditGigPage from 'pages/EditGig'
import GigPage from 'pages/GigPage'
import GigsPage from 'pages/GigsPage'
import HomePage from 'pages/HomePage'
import NewGigPage from 'pages/NewGig'

const RoutesComponent: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route path={Routes.Home.path} exact={true} component={HomePage} />
      <Route path={Routes.Gigs.path} component={GigsPage} />
      <Route path={Routes.Gig.path} component={GigPage} />
      <Route path={Routes.NewGig.path} component={NewGigPage} />
      <Route path={Routes.EditGig.path} component={EditGigPage} />
    </Switch>
  )
}

export default RoutesComponent