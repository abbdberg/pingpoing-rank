import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#ff4400',
    // },
    // secondary: {
    //   main: '#00ff44',
    // },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>

  </React.StrictMode>,
)
