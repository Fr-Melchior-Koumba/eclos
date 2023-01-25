import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './assets/css/index.css'
import { ContextProvider } from './context/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
