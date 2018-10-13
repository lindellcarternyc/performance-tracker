import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from 'components/App'

import setGlobalStyles from 'styles/global-styles'

import registerServiceWorker from './registerServiceWorker'

setGlobalStyles()

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
