import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { Provider } from 'react-redux'
import { PrimeReactProvider } from 'primereact/api';
import { store } from './store/store.ts'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>

    </Provider>

  </React.StrictMode>,
)
