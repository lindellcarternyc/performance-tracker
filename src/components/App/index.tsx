import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import RoutesComponent from 'routes'
import initStore from 'store'
import { fetchGigsSuccess } from 'store/gigs/gig.actions'

import gigService from 'services/gig.service'

import { ThemeProvider } from 'styles/styled-components'
import { LightTheme } from 'styles/themes'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

const store = initStore()

class App extends React.Component {
  public componentDidMount() {
    gigService.subscribeToGigs(gigs => {
      store.dispatch(fetchGigsSuccess(gigs))
    })
  }

  public render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={LightTheme}>
            <div>
              <Header />
                <Main>
                  <RoutesComponent />
                </Main>
              <Footer />
            </div>
          </ThemeProvider>
        </Router>
      </Provider>
    )
  }
}

export default App