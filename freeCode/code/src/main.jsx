import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Deliver } from './assets/Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Deliver>
  <App />
 
  </Deliver>
      </>,
)
