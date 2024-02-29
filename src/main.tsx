import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios'
import './index.css';

axios.defaults.baseURL = 'http://localhost:4000/api/'
axios.defaults.timeout = 60000;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* <Provider store={store}> */}

    <App />
      {/* </Provider> */}
  </React.StrictMode>,
)
