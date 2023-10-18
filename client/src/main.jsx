import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/GlobalContext.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import ToastProvider from './context/ToastContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ToastProvider>
   <Provider store={store}>

<ContextProvider>
<App />
</ContextProvider>
 </Provider>
   </ToastProvider>
  </React.StrictMode>,
)
