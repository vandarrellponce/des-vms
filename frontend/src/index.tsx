import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './csstheme/bootstrapflatly.min.css'

import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
