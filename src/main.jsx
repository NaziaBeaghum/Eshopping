import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Cartcontext from './Context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Cartcontext>
       <App />
     </Cartcontext> 
    </BrowserRouter>
  </StrictMode>,
)
