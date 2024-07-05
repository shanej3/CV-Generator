import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'

import './styles/header.css'
import { GeneralInfo } from './components/GeneralInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div id="left">
      <GeneralInfo />
    </div>
    <div id="right">

    </div>
  </React.StrictMode>,
)
