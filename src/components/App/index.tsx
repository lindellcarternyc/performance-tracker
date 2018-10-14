import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routes'

import { Provider } from 'react-redux'
import initStore from 'store'

import { ThemeProvider } from 'styles/styled-components'
import { LightTheme } from 'styles/themes'

// import Calendar from 'components/Calendar'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

import { GigModel } from 'models/gig.model'
import gigService from 'services/gig.service'

interface AppState {
  gigs: GigModel[]
}

const store = initStore()

class App extends React.Component<{}, AppState> {
  public readonly state: AppState = {
    gigs: []
  }

  public async componentDidMount() {
    const gigs = await gigService.gigs()
    return this.setState({gigs})
  }

  public render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={LightTheme}>
            <div>
              <Header />
              <Main>
                <Routes />
                {/* <Calendar gigs={this.state.gigs} onSelectGig={this.onSelectGig} /> */}
              </Main>
              <Footer />
            </div>
          </ThemeProvider>
        </Router>
      </Provider>
    )
  }

  // private onSelectGig = (gig: GigModel, evt: React.SyntheticEvent) => {
  //   evt.preventDefault()
  //   evt.stopPropagation()

  //   // tslint:disable-next-line:no-console
  //   console.log(gig)
  // }
}

export default App