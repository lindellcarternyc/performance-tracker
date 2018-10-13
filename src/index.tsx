import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from 'components/App'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import setGlobalStyles from 'styles/global-styles'

import registerServiceWorker from './registerServiceWorker'

setGlobalStyles()

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
