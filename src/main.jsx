import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import eshStore from './Redux/eshStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={eshStore}>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
