// @react
import React from 'react'
import ReactDOM from 'react-dom'
// @design
// import './assets/styles/index.scss'
import * as serviceWorker from './serviceWorker'
// @components
import Favicon from 'react-favicon'
import App from './app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import atdTheme from '@bit/littlebox.atd.theme'
// import atdTheme from 'components/Theme'

ReactDOM.render(
  <>
    <Favicon url={['./images/favicon.png']} />
    <MuiThemeProvider theme={atdTheme}>
      <App />
    </MuiThemeProvider>
  </>,
  document.getElementById('root'),
)
serviceWorker.register()
