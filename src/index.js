import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router-dom'

import App from '@/components/App'

import '@/styles/index.scss'

import { BaseStore } from '@/stores'

const browserHistory = createBrowserHistory()
const routerStore = new RouterStore()

const stores = {
  router: routerStore,
  base: new BaseStore(routerStore),
}

const history = syncHistoryWithStore(browserHistory, routerStore)

render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('app')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@/components/App', () => {
    const NextApp = require('@/components/App').default
    render(
      <Provider {...stores}>
        <Router history={history}>
          <AppContainer>
            <NextApp />
          </AppContainer>
        </Router>
      </Provider>,
      document.getElementById('app')
    )
  })
}
