import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Uncontrolled from './components lection/Uncontrolled.jsx'
import Controlled from './components lection/Controlled.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Controlled></Controlled> */}
    {/* <Uncontrolled></Uncontrolled> */}
    <App />
  </StrictMode>,
)
