// External imports
import React from 'react'
import ReactDOM from 'react-dom'

// Asset imports
import './index.css'
import App from './App'

// Local imports
import * as serviceWorker from './serviceWorker'


ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()