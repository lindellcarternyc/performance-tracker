import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RoutesComponent from 'routes'

import { Provider } from 'react-redux'
import initStore from 'store'

import { ThemeProvider } from 'styles/styled-components'
import { LightTheme } from 'styles/themes'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

const store = initStore()

class App extends React.Component {
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

  // private onSelectGig = (gig: GigModel, evt: React.SyntheticEvent) => {
  //   evt.preventDefault()
  //   evt.stopPropagation()

  //   // tslint:disable-next-line:no-console
  //   console.log(gig)
  // }
}

export default App