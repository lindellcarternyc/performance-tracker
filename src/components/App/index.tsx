import * as React from 'react'

import { ThemeProvider } from 'styles/styled-components'
import { LightTheme } from 'styles/themes'

import Calendar from 'components/Calendar'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

import gigFactory from 'factories/gig.factory'

const gig = gigFactory()

const App: React.SFC<{}> = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <div>
        <Header />
        <Main>
          <Calendar gigs={[gig]} />
        </Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App