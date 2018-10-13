import * as React from 'react'

import { ThemeProvider } from 'styles/styled-components'
import { LightTheme } from 'styles/themes'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

const App: React.SFC<{}> = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <div>
        <Header />
        <Main>
          <div>Calendar</div>
        </Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App