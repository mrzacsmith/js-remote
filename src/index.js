import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './App'

import theme from './theme'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
