import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/GlobalContext.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import ToastProvider from './context/ToastContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <ContextProvider>
            <App />
          </ContextProvider>
        </PersistGate>
      </Provider>
    </ToastProvider>
  </React.StrictMode>,
)
