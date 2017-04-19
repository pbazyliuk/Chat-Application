import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('app'))
